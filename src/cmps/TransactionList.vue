<template>
    <section class="transaction-list">
        <h1>Your transactions</h1>
        <TransitionGroup name="list" tag="ul" class="contact-transaction clean-list">
            <li v-for="transaction in transactions" :key="transaction.at">
                <TransactionPreview :transaction="transaction" />
            </li>
        </TransitionGroup>
    </section>
</template>

<script>
import { userService } from '../services/user.service.js'
import TransactionPreview from '../cmps/TransactionPreview.vue'
export default {
    data() {
        return {
            user: null,
            transactions: null
        }
    },
    created() {
        this.user = userService.getLoggedinUser()
        this.transactions = this.user.transactions.slice(-3).reverse()
    },
    components: {
        TransactionPreview,
    }
    
}
</script>

<style lang="scss"></style>