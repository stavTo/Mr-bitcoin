<template>
    <section v-if="contact" class="contact-edit flex flex-column align-center">
        <h2 v-if="contact._id">Edit</h2>
        <h2 v-else>Add</h2>

        <form @submit.prevent="saveContact" class="flex flex-column justify-center contact-edit-form">
            <label for="name">Name: </label>
            <input class="input" v-model="contact.name" type="text" id="name">

            <label for="email">Email: </label>
            <input class="input" v-model.email="contact.email" type="email" id="email">

            <label for="phone">Phone: </label>
            <input class="input" v-model.phone="contact.phone" type="text" id="phone">

            <button class="btn">Save</button>
        </form>
    </section>
</template>

<script>
import { contactService } from '@/services/contact.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/eventBus.service.js'

export default {
    data() {
        return {
            contact: null,
        }
    },
    methods: {
        async saveContact() {
            try {
               await this.$store.dispatch({ type: 'saveContact', contact: this.contact })
               showSuccessMsg('Contact saved')
            } catch (err) {
                showErrorMsg('Cannot save contact')
            } finally {
                this.$router.push('/contact')
            }
        }
    },
    async created() {
        const contactId = this.$route.params.id
        if (contactId) {
            this.contact = await contactService.get(contactId)
        } else {
            this.contact = contactService.getEmptyContact()
        }
    }
}
</script>

<style lang="scss"></style>