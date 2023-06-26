import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'usersDB'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'

export const userService = {
    get,
    save,
    getEmptyUser,
    loginSignUp,
    logout,
    getLoggedinUser,
    transferBitcoin
}

async function loginSignUp(username) {
    try {
        const users = await storageService.query(STORAGE_KEY)
        const user = users.find(user => user.username === username)
        if (user) return _setLoggedinUser(user)

        const newUser = await storageService.post(STORAGE_KEY, getEmptyUser(username))
        return _setLoggedinUser(newUser)

    } catch (err) {
        console.log('err', err)
    }
}

async function logout() {
    return sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN)
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

function getEmptyUser(username = '', balance = 100, transactions = []) {
    return {
        _id: '',
        username,
        balance,
        transactions
    }
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
}

function _setLoggedinUser({ _id, username, balance, transactions }) {
    const userToSave = {
        _id,
        username,
        balance,
        transactions
    }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(userToSave))
    return userToSave
}

function transferBitcoin(transaction) {
    transaction.at = new Date(transaction.at).toLocaleDateString()
    const user = getLoggedinUser()
    user.balance -= transaction.amount
    user.transactions.push(transaction)
    _setLoggedinUser(user)
    save(user)
}
