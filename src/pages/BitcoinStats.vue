<template>
    <BarChart :func="getMarketPriceHistory" />
    <BarChart :func="getAvgBlockSize" />
</template>

<script>
import BarChart from '../cmps/BarChart.vue'
import { bitcoinService } from '../services/bitcoin.service'
export default {
    methods: {
        getMarketPriceHistory() {
            return bitcoinService.getMarketPriceHistory()
        },

        getAvgBlockSize() {
            return bitcoinService.getAvgBlockSize()
        }
    },

    components: {
        BarChart
    }
}
</script>

<style lang="scss"></style>