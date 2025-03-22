<script>
    export default {
        props: {
            title: String,
            text: String
        }
    }
</script>

<template>
    <v-expansion-panels >
        <v-expansion-panel
        :title="title"
        :text="text"
        >
        <v-expansion-panel-text>
            <slot></slot>
        </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>