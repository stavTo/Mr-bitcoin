import { contactService } from '@/services/contact.service.js'

export default {
    state() {
        return {
            contacts: null,
        }
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact(state, { contactId }) {
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            state.contacts.splice(idx, 1)
        },
        saveContact(state, { contact }) {
            if (contact._id) {
                const idx = state.contacts.findIndex(c => c._id === contact._id)
                state.contacts.splice(idx, 1, contact)
            } else {
                state.contacts.unshift(contact)
            }
        },
    },
    actions: {
        async loadContacts({ commit }) {
            const contacts = await contactService.query()
            console.log('contacts', contacts)

            commit({ type: 'setContacts', contacts })
        },
        async removeContact({ commit }, { contactId }) {
            await contactService.remove(contactId)
            commit({ type: 'removeContact', contactId })
        },
        async saveContact({ commit }, { contact }) {
            await contactService.save(contact)
            commit({ type: 'saveContact', contact })
        }
    },
    getters: {
        contacts(state) {
            return state.contacts
        }
    },
}
