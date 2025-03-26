<script>
export default {
    props: {
        title: String,
        text: String
    }
}
</script>

<template>
    <v-expansion-panels>
        <v-expansion-panel :title="title" :text="text">
            <v-expansion-panel-text>
                <slot></slot>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<style scoped>
.v-expansion-panels {
    box-shadow: 0px 5px 30px -10px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
}

.v-expansion-panel {
    border-radius: 10px;
    box-sizing: border-box;

    .v-expansion-panel-title::hover {
        background-color: white;
    }
}
</style>