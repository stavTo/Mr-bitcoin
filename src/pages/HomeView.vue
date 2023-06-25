<template>
    <main class="main-layout">
        <h1>Buy, trade, and hold 350+ cryptocurrencies on Mr-Bitcoin</h1>
        <h3>Current exchange rate: {{ info.exchangeRate }}</h3>
    </main>
</template>

<script>

import { bitcoinService } from '../services/bitcoin.service'

export default {
    data() {
        return {
            info: {
                exchangeRate: null,
            }
        }
    },

    async created() {
        try {
            this.info.exchangeRate = await bitcoinService.getRate()
        } catch (err) {
            throw err
        }
    },
}

</script>