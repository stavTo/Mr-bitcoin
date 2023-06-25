<template>
    <section class="contact-preview">
        <h4>{{ contact.name }}</h4>
        <h4>{{ contact.phone }}</h4>
        <img :src="contact.imgUrl" alt="">
    </section>
</template>

<script>
export default {
    props: {
        contact: { type: Object, required: true },
    }
}
</script>

<style lang="scss"></style>