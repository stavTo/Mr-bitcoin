<template>
    <section v-if="contact"  class="contact-edit flex flex-column align-center">
        <h2 v-if="contact._id">Edit</h2>
        <h2 v-else>Add</h2>

        <form @submit.prevent="save" class="flex flex-column justify-center contact-edit-form">
            <label for="name">Name: </label>
            <input v-model="contact.name" type="text" id="name">

            <label for="email">Email: </label>
            <input v-model.email="contact.email" type="email" id="email">

            <label for="phone">Phone: </label>
            <input v-model.phone="contact.phone" type="text" id="phone">

            <button class="btn">Save</button>
        </form>
    </section>
</template>

<script>
import { contactService } from '@/services/contact.service.js'

export default {
    data() {
        return {
            contact: null,
        }
    },
    methods: {
        async save() {
            console.log("this.contact", this.contact)
            await contactService.save(this.contact)
            this.$router.push('/contact')
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