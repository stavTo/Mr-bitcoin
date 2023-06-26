import { createStore } from 'vuex'
import contact from './modules/contact.js'

const storeOptions = {
    strict: true,
    state() {
        return {
            count: 10,
        }
    },
    mutations: {
    },
    getters: {
    },
    modules: {
        contact,
    }
}
const store = createStore(storeOptions)
export default store