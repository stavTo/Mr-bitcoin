<template>
    <section class="contact-index main-layout">
        <UserMsg />
        <ContactFilter @filter="onSetFilterBy" />
        <RouterLink to="/contact/edit"><button class="btn">Add contact</button></RouterLink>
        <ContactList @remove="removeContact" v-if="contacts" :contacts="filteredContacts" />
    </section>
</template>

<script>
import { contactService } from '@/services/contact.service.js'
import { eventBus } from '@/services/eventBus.service.js'

import ContactList from '@/cmps/ContactList.vue'
import ContactFilter from '@/cmps/ContactFilter.vue'
import UserMsg from '@/cmps/UserMsg.vue'

export default {
    data() {
        return {
            contacts: null,
            filterBy: {}
        }
    },
    methods: {
        async removeContact(contactId) {
            const msg = {
                txt: `Contact ${contactId} removed...`,
                type: 'success',
                timeout: 2500,
            }
            await contactService.remove(contactId)

            const idx = this.contacts.findIndex(contact => contact._id === contactId)
            this.contacts.splice(idx, 1)

            // Implement a filter removal

            eventBus.emit('user-msg', msg)
        },
        onSetFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredContacts() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            let contacts = this.contacts.filter(contact => regex.test(contact.name))
            return contactService.sort(contacts, this.filterBy.sort)
        },

    },
    async created() {
        this.contacts = await contactService.query()
    },
    components: {
        ContactList,
        ContactFilter,
        UserMsg,
    }
}
</script>

<style lang="scss"></style>