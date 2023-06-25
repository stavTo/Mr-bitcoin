import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'usersDB'

_createUsers()


export const userService = {
    get,
    save,
    getEmptyUser,
}

function get(userId) {
    return storageService.get(STORAGE_KEY, userId)
}

function save(user) {
    if (user._id) {
        return storageService.put(STORAGE_KEY, user)
    } else {
        return storageService.post(STORAGE_KEY, user)
    }
}

function getEmptyUser(name = '', balance = 50, transactions = []) {
    return {
        _id: '',
        name,
        balance,
        transactions
    }
}


function _createUsers() {
    let users = utilService.loadFromStorage(STORAGE_KEY)
    if (!users || !users.length) {
        users = []
        users.push(_createUser('Roni'))
        users.push(_createUser('Stav'))
        users.push(_createUser('Bido'))
        users.push(_createUser('Shaul'))
        utilService.saveToStorage(STORAGE_KEY, users)
    }
}

function _createUser(name) {
    const user = getEmptyUser(name)
    user._id = utilService.makeId()
    return user
}