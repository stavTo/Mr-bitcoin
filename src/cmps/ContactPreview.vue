<template>
    <article class="contact-preview flex">
        <h4>{{ contact.name }}</h4>
    </article>
    <article class="contact-preview flex">
        <h4>{{ contact.phone }}</h4>
    </article>
</template>

<script>
export default {
    props: {
        contact: { type: Object, required: true },
    }
}
</script>

<style lang="scss"></style>