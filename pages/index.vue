<script>
import useGetMetadataQuery from '../hooks/GetMetadata/useGetMetadataQuery';
import useGetGeographLevel from '../hooks/GetGeographLevel/useGetGeographLevelQuery';
import useGetPeriodsListQuery from '../hooks/GetPeriodsList/useGetPeriodsListQuery';
import useAggregateListQuery from '~/hooks/GetAggregateList/useAggregateListQuery';
import { watch } from 'vue';
import Chart from '~/components/chart.vue';

export default {
  components: {
    Chart
  },
  setup() {
    const refsMap = {
      variables: shallowRef([]),
      periods: shallowRef([]),
      classifications: shallowRef([]),
      geographLevels: shallowRef([]),
    };

    const selectCardType = ref(true);
    const currentType = ref("Bar");

    const changeType = (type) => {
      currentType.value = type;
    };

    const hasItems = computed(() => {
      return (
        refsMap.variables.value.length > 0 &&
        refsMap.periods.value.length > 0 &&
        refsMap.classifications.value.length > 0 &&
        refsMap.geographLevels.value.length > 0
      );
    });

    const filters = computed(() => [
      {
        key: "variables",
        label: "Variáveis",
        value: refsMap.variables.value,
        data: metadata.value?.variaveis || [],
        loading: isLoadingMetada.value,
      },
      {
        key: "periods",
        label: "Períodos",
        value: refsMap.periods.value,
        data: periods.value || [],
        loading: isLoadingPeriods.value,
      },
      {
        key: "classifications",
        label: metadata.value?.classificacoes?.[0]?.nome || "Classificações",
        value: refsMap.classifications.value,
        data: metadata.value?.classificacoes?.[0]?.categorias || [],
        loading: isLoadingMetada.value,
      },
      {
        key: "geographLevels",
        label: "Nível geográfico",
        value: refsMap.geographLevels.value,
        data: geographLevel.value || [],
        loading: isLoadingGeographLevel.value,
      },
    ]);

    const { data: metadata, isLoading: isLoadingMetada } = useGetMetadataQuery();
    const { data: geographLevel, isLoading: isLoadingGeographLevel } = useGetGeographLevel('N1');
    const { data: periods, isLoading: isLoadingPeriods } = useGetPeriodsListQuery();
    const useAggregateList =
      useAggregateListQuery({
        hasItems: hasItems.value,
        ...refsMap,
      });

    const updateSelected = (key, values) => {
      if (refsMap[key]) {
        refsMap[key].value = values;
      } else {
        console.warn(`Chave "${key}" não encontrada no mapa de referências.`)
      }
    };

    const formatedData = computed(() => {
      return useAggregateList?.data?.value?.flatMap((item) => formatData(useAggregateList?.data?.value, item?.id));
    })

    const groupByVariable = (data) => {
      return data.reduce((acc, item) => {
        if (!acc[item.variavel]) {
          acc[item.variavel] = [];
        }
        acc[item.variavel].push(item);
        return acc;
      }, {});
    };

    const groupedData = computed(() => {
      if (!formatedData.value) return {};

      return groupByVariable(formatedData.value);
    });

    watch(
      () => ({
        variables: refsMap.variables.value,
        periods: refsMap.periods.value,
        classifications: refsMap.classifications.value,
        geographLevels: refsMap.geographLevels.value
      }),
      ({ variables, periods, classifications, geographLevels }) => {
        if (variables.length > 0 && periods.length > 0 && classifications.length > 0 && geographLevels.length) {
          hasItems.value = true;
          useAggregateList.refetch();
        } else {
          hasItems.value = false;
        }
      },
      { deep: true }
    );

    return {
      refsMap,
      updateSelected,
      metadata,
      geographLevel,
      periods,
      isLoadingGeographLevel,
      isLoadingMetada,
      isLoadingPeriods,
      useAggregateList,
      isLoadingAggregateList: useAggregateList?.isLoading?.value,
      filters,
      formatedData,
      groupedData,
      hasItems,
      selectCardType,
      changeType,
      currentType
    };
  },
};

</script>

<template>
  <v-container>
    <div class="filter-bar">
      <div class="cardFilter">
        <h2>Filtros</h2>
        <v-row>
          <v-col cols="6" v-for="filter in filters" :key="filter.key">
            <v-skeleton-loader :loading="filter.loading" type="list-item-two-line">
              <Select v-bind:model-value="filter.value" :label="filter.label" :data="filter.data"
                @update:model-value="(values) => updateSelected(filter.key, values)" />
            </v-skeleton-loader>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="card" v-if="hasItems">
      <h2>Visualizar Dados</h2>
      <v-btn-group variant="text" divided>

        <v-btn icon="mdi-chart-bar" v-if="!selectCardType" @click="changeType('Bar')"></v-btn>
        <v-btn icon="mdi-chart-line" v-if="!selectCardType" @click="changeType('Line')"></v-btn>
        <v-btn icon="mdi-chart-pie" v-if="!selectCardType" @click="changeType('Pie')"></v-btn>
      </v-btn-group>
      <CardSelector @click="selectCardType = !selectCardType" />

      <div class="card-body">
        <Table v-if="selectCardType" v-for="(data, variable) in groupedData" :title="variable" :data="data" />
        <Chart :chart-type="currentType" v-if="!selectCardType" v-for="data in groupedData" :chart-data="data" />
      </div>
    </div>

  </v-container>
</template>

<style>
.filter-bar {
  display: flex;
  justify-content: space-between;
}

.card {
  width: 100%;
  border-radius: 10px;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0px 5px 30px -10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  position: relative;
}

.cardFilter {
  box-shadow: 0px 5px 30px -10px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  transition: height 0.5s ease-in-out;
}
</style>