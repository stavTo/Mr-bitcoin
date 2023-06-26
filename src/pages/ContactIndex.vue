<template>
    <section class="contact-index main-layout">
        <UserMsg />
        <ContactFilter @filter="onSetFilterBy" />
        <RouterLink to="/contact/edit" class="add-edit-btn"><button class="btn add-edit-btn">Add contact +</button>
        </RouterLink>
        <ContactList @remove="removeContact" v-if="contacts" :contacts="filteredSortedContacts" />
    </section>
</template>

<script>
import { contactService } from '@/services/contact.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/eventBus.service.js'

import ContactList from '@/cmps/ContactList.vue'
import ContactFilter from '@/cmps/ContactFilter.vue'
import UserMsg from '@/cmps/UserMsg.vue'

export default {
    data() {
        return {
            filterBy: {}
        }
    },
    methods: {
        async removeContact(contactId) {
            try {
                this.$store.dispatch({ type: 'removeContact', contactId })
                showSuccessMsg('Contact removed')
            } catch (err) {
                showErrorMsg('Cannot remove contact')
            }
        },
        onSetFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredSortedContacts() {
            let contacts = this.contacts.slice()
            if (this.filterBy.txt) {
                const regex = new RegExp(this.filterBy.txt, 'i')
                contacts = contacts.filter(contact => regex.test(contact.name))
            }
            if (this.filterBy.sort) {
                contactService.sort(contacts, this.filterBy.sort)
            }
            return contacts
        },
        contacts() { return this.$store.getters.contacts }
    },
    async created() {
        this.$store.dispatch({ type: 'loadContacts' })
    },
    components: {
        ContactList,
        ContactFilter,
        UserMsg,
    }
}
</script>

<style lang="scss"></style>