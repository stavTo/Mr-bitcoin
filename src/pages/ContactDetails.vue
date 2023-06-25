<template>
    <article v-if="contact" class="contact-details">
        <h2>{{contact.name}}</h2>
        <h2>{{contact.email}}</h2>
        <h3>{{contact.phone}}</h3>
        <RouterLink to="/contact">
            <button class="btn">Back</button>
        </RouterLink>
    </article>
</template>

<script>
import { contactService } from '@/services/contact.service.js'

export default {
    data() {
        return {
            contact: null,
        }
    },
    async created() {
        const contactId = this.$route.params.id
        console.log("contactId", contactId)
        this.contact = await contactService.get(contactId)  
        console.log("contact", this.contact)
    }
}
</script>

<style lang="scss">

</style>