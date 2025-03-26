<template>
    <div class="chart-container">
        <component :is="chartComponent" v-if="chartData" :data="processedChartData" />
    </div>
</template>

<script>
import { Bar, Line, Pie } from "vue-chartjs";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    CategoryScale,
    LinearScale,
} from "chart.js";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    CategoryScale,
    LinearScale
);

export default {
    name: "DynamicChart",
    components: { Bar, Line, Pie },
    props: {
        chartData: {
            type: Array, // Recebe uma matriz de dados do pai
            required: true,
            default: () => []
        },
        chartType: {
            type: String,
            required: true,
            default: "Bar"
        }
    },
    computed: {
        chartComponent() {
            // Retorna o componente correto com base no tipo de gráfico
            if (this.chartType === "Bar") return Bar;
            if (this.chartType === "Line") return Line;
            if (this.chartType === "Pie") return Pie;
            return Bar; // Padrão para gráfico de barra
        },
        processedChartData() {
            const labels = this.chartData.map((item) => item.ano);
            const data = this.chartData.map((item) => parseFloat(item.valorChart));
            // console.log(data)
            const variableLabel = this.chartData[0]?.variavel || "Dados";

            return {
                labels, // Define os rótulos
                datasets: [
                    {
                        label: variableLabel,
                        data, // Associa os valores
                        backgroundColor: "rgba(75, 192, 192, 0.6)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1,
                    },
                ],
            };
        },
    },
};
</script>

<style scoped>
.chart-container {
    display: flex;
    /* Habilita o Flexbox */
    justify-content: center;
    /* Centraliza horizontalmente */
    align-items: center;
    /* Centraliza verticalmente */
    height: 50vh;
    /* Define altura completa da viewport */
}
</style>