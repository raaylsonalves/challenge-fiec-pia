<script>
import useGetMetadataQuery from '../hooks/GetMetadata/useGetMetadataQuery';
import useGetGeographLevel from '../hooks/GetGeographLevel/useGetGeographLevelQuery';
import useGetPeriodsListQuery from '../hooks/GetPeriodsList/useGetPeriodsListQuery';
import useAggregateListQuery from '~/hooks/GetAggregateList/useAggregateListQuery';
import { watch } from 'vue';

export default {
  setup() {

    const refsMap = {
      variables: shallowRef([]),
      periods: shallowRef([]),
      classifications: shallowRef([]),
      geographLevels: shallowRef([]),
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
      filters
    };
  },
};

</script>

<template>
  <Panel title="Filtros">
    <v-row>
      <v-col cols="6" v-for="filter in filters" :key="filter.key">
        <v-skeleton-loader :loading="filter.loading" type="list-item-two-line">
          <Select
            v-bind:model-value="filter.value"
            :label="filter.label"
            :data="filter.data"
            @update:model-value="(values) => updateSelected(filter.key, values)"
          />
        </v-skeleton-loader>
      </v-col>
    </v-row>
  </Panel>
</template>