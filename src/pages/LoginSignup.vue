<template>
    <div class="login-page">

        <form @submit.prevent="onLogin" class="login-form">

            <label for="name">Login: </label>
            <input placeholder="Please enter your name" class="input" v-model="username" type="text" id="name">

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

<style lang="scss">
.login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    .login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-block-start: 120px;
        border: 1px solid #fcd535;
        height: 400px;
        width: 80%;
        
        label {
            font-size: 44px;
            margin-block-end: 20px;
            font-family: cursive;
        }
        
        input {
            margin-block: 20px;
        }
        button {
            width: 300px;
        }
    }
}
</style>