<template>
  <div class="stats-container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { bitcoinService } from '../services/bitcoin.service'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  props: {
    func: {type: Function, required: true}
  },
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: {
      labels: [],
      datasets: [
        {
          label: 'Market Price History',
          backgroundColor: '#fcd535',
          data: []
        }
      ],
    }

  }),
  async mounted() {
    this.loaded = false

    try {
      const { rateValues, timestamps } = await bitcoinService.getRateMap(this.func)
      // this.chartdata = values


      this.chartData.labels = timestamps
      this.chartData.datasets[0].data = rateValues

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>