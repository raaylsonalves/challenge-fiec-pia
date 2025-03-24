<script>
import { computed, ref } from 'vue'

export default {
  props: {
    label: String,
    data: {
      type: Array,
      required: true
    },
    modelValue: {
      type: Array,
      default: () => []
    },
  },
  setup(props, { emit }) {
    const selectedValues = ref(Array.isArray(props.modelValue) ? [...props.modelValue] : []);

    const checkedAll = computed(() => {
      return selectedValues.value.length === props.data.length;
    });

    const checked = computed(() => {
      return selectedValues.value.length > 0;
    });

    const toggle = () => {
      if (checkedAll.value) {
        selectedValues.value = [];
      } else {
        selectedValues.value = props.data.map((item) => item.id);
      }

      emit("update:model-value", selectedValues.value);
    };

    const updateSelectedValues = (newValue) => {
      selectedValues.value = [...newValue];
    };

    return {
      selectedValues,
      checkedAll,
      checked,
      toggle,
      updateSelectedValues
    }
  },
  watch: {
    modelValue(newValue) {
      this.updateSelectedValues(newValue)
    }
  },
}


</script>

<template>
  <v-select v-model="selectedValues" @update:model-value="(value) => $emit('update:model-value', value)" :items="data"
    item-value="id" item-title="nome" :label="label" variant="solo-filled" multiple>
    <template v-slot:selection="{ item, index }">
      <v-chip v-if="index < 2" :text="item.title" class="chip"></v-chip>
      <span v-if="index === 2" class="chip-extra">
        (+{{ selectedValues.length - 2 }} mais)
      </span>
    </template>
    <template v-slot:prepend-item>
      <v-list-item title="Selecionar todos" @click="toggle">
        <template v-slot:prepend>
          <v-checkbox-btn :color="checked ? 'indigo-darken-4' : undefined" :indeterminate="checked && !checkedAll"
            :model-value="checkedAll"></v-checkbox-btn>
        </template>
      </v-list-item>

      <v-divider class="mt-2"></v-divider>
    </template>
  </v-select>
</template>

<style>
.chip {
  background-color: #e0e0e0;
  margin: 0 4px 4px 0;
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 12px;
  white-space: nowrap;
}

.chip-extra {
  color: #757575;
  font-size: 12px;
  font-weight: bold;
  align-self: center;
}
</style>