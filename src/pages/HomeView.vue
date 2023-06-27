<template>
    <main class="main-layout home-page">
        <div class="main-title">Buy, trade, and hold 350+ cryptocurrencies on Mr-Bitcoin</div>
        <span class="rate">Current BTC USD: {{ info.exchangeRate + '$' }}</span>

        <img class="full" src="../assets/img/hero-bitcoin.jpg" alt="">

        <div class="details-container">
            <div class="item">
                <h2 class="title">$38 billion</h2>
                <span class="subtitle">24h trading volume on Binance exchange</span>
            </div>
            <div class="item">
                <h2 class="title">350+</h2>
                <span class="subtitle">Cryptocurrencies listed</span>
            </div>
            <div class="item">
                <h2 class="title">140 million</h2>
                <span class="subtitle">Registered users</span>
            </div>
            <div class="item">
                <h2 class="title">{{ formattedPercentage }}</h2>
                <span class="subtitle">Lowest transaction fees</span>
            </div>
        </div>

        <div v-if="loggedinuser.transactions.length" class="transaction-list-container">
            <TransactionList />
            </div>
    </main>
</template>

<script>

import { bitcoinService } from '../services/bitcoin.service'
import TransactionList from '../cmps/TransactionList.vue'
import { userService } from '../services/user.service'

export default {
    data() {
        return {
            info: {
                exchangeRate: null,
            },
            formattedPercentage: "<0.10%",
            loggedinuser: null
        }
    },

    async created() {
        try {
            this.loggedinuser = userService.getLoggedinUser()
            this.info.exchangeRate = await bitcoinService.getRate()
        } catch (err) {
            throw err
        }
    },
    components: {
        TransactionList
    }
}

</script>