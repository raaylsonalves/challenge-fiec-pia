<script>
import useGetMetadataQuery from '../hooks/GetMetadata/useGetMetadataQuery'
import useGetGeographLevel from '../hooks/GetGeographLevel/useGetGeographLevelQuery'
import useGetPeriodsListQuery from '../hooks/GetPeriodsList/useGetPeriodsListQuery'
import Select from '~/components/select.vue';
import useAggregateListQuery from '~/hooks/GetAggregateList/useAggregateListQuery';


export default {
  components: {
    Select
  },
  setup() {
    const refsMap = {
      variables: shallowRef([]),
      periods: shallowRef([]),
      classifications: shallowRef([]),
      geographLevels: shallowRef([]),
    }

    // console.log(refsMap.variables);
    // console.log(refsMap.periods);
    // console.log(refsMap.classifications);

    // const aggregates = shallowRef([]);

    const { data: metadata, isLoading: isLoadingMetada } = useGetMetadataQuery();
    const { data: geographLevel, isLoading: isLoadingGeographLevel } = useGetGeographLevel('N1');
    const { data: periods, isLoading: isLoadingPeriods } = useGetPeriodsListQuery();
    const { data: aggregates, isLoading: isLoadingAggregates} = 
      useAggregateListQuery({
        variables: refsMap.variables.value.join("|"),
        periods: refsMap.periods.value.join("|"),
        classifications: refsMap.classifications.value.join(",")
      });

    const updateSelected = (key, values) => {
      if (refsMap[key]) {
        refsMap[key].value = values;
      } else {
        console.warn(`Chave "${key}" não encontrada no mapa de referências.`)
      }
    }

    return {
      refsMap,
      updateSelected,
      metadata,
      geographLevel,
      periods,
      isLoadingGeographLevel,
      isLoadingMetada,
      isLoadingPeriods,
      aggregates
    };
  },
};

// watch(refsMap, (value) => {
//   console.log(value);
// })

</script>


<template>
  <v-container>
    <!-- <div class="header-text">
      <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl
        consectetur et. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies
        vehicula ut id elit. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere
        velit aliquet.</p>
    </div> -->
    <Panel title="Filtros">
      <v-row>
        <v-col cols="6">
          <v-skeleton-loader :loading="isLoadingMetada" type="list-item-two-line">
            <Select v-bind:model-value="refsMap.variables" @update:model-value="(values) => updateSelected('variables', values)" label="Variavéis" :data="metadata.variaveis" />
          </v-skeleton-loader>
        </v-col>
        <v-col cols="6">
          <v-skeleton-loader :loading="isLoadingPeriods" type="list-item-two-line">
            <Select v-bind:model-value="refsMap.periods" @update:model-value="(values) => updateSelected('periods', values)" label="Períodos" :data="periods" />
          </v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-skeleton-loader :loading="isLoadingMetada" type="list-item-two-line">
            <Select v-bind:model-value="refsMap.classifications" @update:model-value="(values) => updateSelected('classifications', values)" :label="metadata.classificacoes[0].nome" :data="metadata.classificacoes[0].categorias" />
          </v-skeleton-loader>
        </v-col>
        <v-col cols="6">
          <v-skeleton-loader :loading="isLoadingGeographLevel" type="list-item-two-line">
            <Select v-bind:model-value="refsMap.geographLevels" @update:model-value="(values) => updateSelected('geographLevels', values)" label="Nível geográfico" :data="geographLevel" />
          </v-skeleton-loader>
        </v-col>
      </v-row>
    </Panel>
    <v-container>
    </v-container>
    <div class="card">
      <div class="card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh
          ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis
          dapibus posuere velit aliquet.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh
          ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis
          dapibus posuere velit aliquet.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh
          ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis
          dapibus posuere velit aliquet.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh
          ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis
          dapibus posuere velit aliquet.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh
          ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis
          dapibus posuere velit aliquet.
        </p>
      </div>
    </div>
    <v-row justify="center" class="mt-4">
      <v-btn-group variant="outlined" divided>
        <v-btn icon="mdi-table"></v-btn>
        <v-btn icon="mdi-chart-bar"></v-btn>
      </v-btn-group>
    </v-row>
    <p>{{ aggregates }}</p>
    <div class="notas">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
    </div>
  </v-container>
</template>

<style>
.container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header-text {
  text-align: center;
  width: 80%;
  margin-bottom: 50px;

  h1 {
    width: 80%;
    margin: 0 auto 50px;
  }
}

.menu {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: 0 auto 30px;
}

.layout-switcher {
  width: fit-content;
  height: 100%;
  background-color: white;
  box-shadow: 0px 5px 30px -10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  text-transform: uppercase;
  margin-left: 30px;

  a {
    text-decoration: none;
    color: black;
  }

  a:nth-last-child(1) {
    border-left: 1px solid black;
    padding-left: 15px;
    margin-left: 15px;
  }

}

.pesquisa {
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 5px 30px -10px rgba(0, 0, 0, 0.2);


  input {
    width: 75%;
    height: 100%;
    border: none;
    padding-left: 10px;
    border-radius: 10px;
  }

  select {
    width: 20%;
    height: 100%;
    border: none;
    border-radius: 10px;

  }
}

.card {
  width: 100%;
  border-radius: 10px;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0px 5px 30px -10px rgba(0, 0, 0, 0.2);
}

.card-body {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 30px;
  text-align: justify;
}

.notas {
  margin: 50px 0 100px;
  align-self: flex-start;
}

.btn-group-below-card {
  margin-top: 0;
  /* Remove margens extras */
  margin-bottom: 0;
  /* Opcional, dependendo do design */
  display: block;
  /* Garante que ocupe toda a largura, se necessário */
}

.card+.btn-group-below-card {
  margin-top: 16px;
  /* Ajusta o espaçamento exato entre o card e o botão */
}
</style>