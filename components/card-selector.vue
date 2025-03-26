<template>
    <v-btn-group variant="text" divided>
        <v-btn icon="mdi-table"></v-btn>
        <v-btn icon="mdi-chart-bar"></v-btn>
    </v-btn-group>
</template>

<style scoped>
.v-btn-group {
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.2);

    flex-shrink: 0;
    position: absolute;
    right: 0;
    top: 0;
}

.v-btn {
    background-color: #f1f1f1;
}
</style>