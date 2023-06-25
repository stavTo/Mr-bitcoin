<template>
    <header class="app-header main-layout full">
        <div class="header-container">
            <RouterLink to="/" class="logo"><img class="logo" src="../assets/img/img-bitcoin.png" alt=""></RouterLink>
            <nav className="main-nav">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/stats">Stats</RouterLink>
                <RouterLink to="/contact">Contacts</RouterLink>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
}
</script>

<style lang="scss"></style>