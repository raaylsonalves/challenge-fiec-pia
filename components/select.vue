<script>
    import { computed, shallowRef } from 'vue'
  
    const selected = shallowRef([])
  
    const checkedAll = computed(() => {
      return selected.value.length === fruits.length
    })
    const checked = computed(() => {
      return selected.value.length > 0
    })
    const title = computed(() => {
      if (checkedAll.value)
        return 'Holy smokes, someone call the fruit police!'
      if (checked.value) return 'Fruit Count'
      return 'How could you not like fruit?'
    })
    const subtitle = computed(() => {
      if (checkedAll.value) return undefined
      if (checked.value) return selected.value.length
      return 'Go ahead, make a selection above!'
    })
  
    function toggle() {
      if (checkedAll.value) {
        selected.value = [] // Desmarca todos os itens
      } else {
        selected.value = fruits.slice() // Seleciona todos os itens
      }
    }

    
    export default {
        props: {
            label: String,
            data: Array,
        }
    }


</script>

<template>
    <v-select
        v-model="selected"
        :items="data"
        item-value="id"
        :item-title="`nome` || `id`"
        :label="label"
        variant="solo-filled"
        multiple
    >
        <template v-slot:prepend-item>
        <v-list-item title="Selecionar todos" @click="toggle">
            <template v-slot:prepend>
            <v-checkbox-btn
                :color="checked ? 'indigo-darken-4' : undefined"
                :indeterminate="checked && !checkedAll"
                :value="true"
            ></v-checkbox-btn>
            </template>
        </v-list-item>

        <v-divider class="mt-2"></v-divider>
        </template>
    </v-select>
</template>