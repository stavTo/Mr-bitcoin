<template>
    <header class="app-header main-layout full">
        <div class="header-container">
            <RouterLink to="/" class="logo"><img class="logo" src="../assets/img/img-bitcoin.png" alt=""></RouterLink>
            <nav className="main-nav">
                <RouterLink to="/home">Home</RouterLink>
                <RouterLink to="/stats">Stats</RouterLink>
                <RouterLink to="/contact">Contacts</RouterLink>
                <RouterLink to="/" @click="onLogout" >Logout</RouterLink>
            </nav>
        </div>
    </header>
</template>

<script>
import { userService } from '../services/user.service.js';

export default {
    methods: {
        async onLogout() {
            await userService.logout()
        }
    }
}
</script>

<style lang="scss"></style>