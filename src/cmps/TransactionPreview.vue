<template>
    <section class="transaction-preview">
        <h4>{{ 'To ' + transaction.to }}</h4>
        <h4>{{  transaction.amount + "$" }}</h4>
        <h4>{{ 'At ' + transaction.at }}</h4>
    </section>
</template>

<script>
export default {
    props: {
        transaction: { type: Object, required: true },
    }
}
</script>

<style lang="scss"></style>