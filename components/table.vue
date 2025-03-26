<template>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title
              >{{title}}</v-card-title
            >
            <v-data-table
              :items="data"
              :headers="headers"
              class="elevation-1"
            >
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
  
<script>
        
export default {
        props: {
            data: {
                type: Array,
                required: true,
                default: () => []
            },
            title: String
        },
        setup() {
            const headers = ref([
            { title: 'Categoria', key: 'categoria', align: 'start' },
            { title: 'Localidade', key: 'localidade', align: 'end' },
            { title: 'Ano', key: 'ano', align: 'start' },
            { title: 'Valor', key: 'valor', align: 'start' },
        ])

        return {
            headers
        }
    }
}

</script>
  