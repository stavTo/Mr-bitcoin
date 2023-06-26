<template>
    <div class="login-page">

        <form @submit.prevent="onLogin">

            <label for="name">Login: </label>
            <input class="input" v-model="username" type="text" id="name">

            <button class="btn">Login</button>
        </form>

    </div>
</template>

<script>

import { userService } from '../services/user.service.js'
export default {
    data() {
        return {
            username: ''
        }
    },
    methods: {
        async onLogin() {
            await userService.loginSignUp(this.username)
            this.$router.push('/home')
        }
    }
}
</script>

<style lang="scss"></style>