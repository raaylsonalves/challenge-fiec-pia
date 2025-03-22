<script>
import useGetMetadataQuery from '../hooks/GetMetadata/useGetMetadataQuery'
import useGetGeographLevel from '../hooks/GetGeographLevel/useGetGeographLevelQuery'
import useGetPeriodsListQuery from '../hooks/GetPeriodsList/useGetPeriodsListQuery'


export default {
  setup() {
    const {data: metadata} = useGetMetadataQuery();
    const {data: geographLevel} = useGetGeographLevel('N1');
    const {data: periods} = useGetPeriodsListQuery();

    return {metadata, geographLevel, periods};
  },
};


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
          <Select label="Variavéis" :data="metadata.variaveis" />
        </v-col>
        <v-col cols="6">
          <Select label="Períodos" :data="periods" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <Select :label="metadata.classificacoes[0].nome" :data="metadata.classificacoes[0].categorias" />
        </v-col>
        <v-col cols="6">
          <Select label="Nível geográfico" :data="geographLevel" />
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
  margin-top: 0; /* Remove margens extras */
  margin-bottom: 0; /* Opcional, dependendo do design */
  display: block; /* Garante que ocupe toda a largura, se necessário */
}
.card + .btn-group-below-card {
  margin-top: 16px; /* Ajusta o espaçamento exato entre o card e o botão */
}
</style>