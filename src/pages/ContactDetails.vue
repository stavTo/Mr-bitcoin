<template>
    <article v-if="contact" class="contact-details">
        <h2>{{ contact.name }}</h2>
        <h2>{{ contact.email }}</h2>
        <h3>{{ contact.phone }}</h3>
        <RouterLink to="/contact">
            <button class="btn back-btn">Back</button>
        </RouterLink>

        <div class="transfer-container">
            <h2>Tranfer BTC to {{ contact.name }}</h2>
            <input class="input" v-model="amount" type="number" placeholder="Please enter amount to transfer">
            <button @click="onTransfer" class="btn">Transfer</button>
        </div>
    </article>
</template>

<script>
import { contactService } from '@/services/contact.service.js'
import { userService } from '../services/user.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/eventBus.service'

export default {
    data() {
        return {
            contact: null,
            amount: null
        }
    },
    async created() {
        const contactId = this.$route.params.id
        this.contact = await contactService.get(contactId)
    },
    methods: {
        async onTransfer() {
            const transaction = {
                amount: this.amount,
                at: Date.now(),
                to: this.contact.name,
                toId: this.contact._id
            }
            try {
                await userService.transferBitcoin(transaction)
                this.amount = ''
                showSuccessMsg('Transfer completed')
            } catch {
                showErrorMsg('Transfer failed')
            }
        }
    }
}
</script>

<style lang="scss"></style>