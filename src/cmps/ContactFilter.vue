<template>
    <section class="contact-filter full">
        <p>Search: </p>
        <label for="name">Name: </label>
        <input @input="onSetFilterBy" v-model="filterBy.txt" type="text" id="name">

        <button @click="onSetSortBy" class="btn">
            Sorting by name
            <font-awesome-icon icon="fa-solid fa-arrow-down-long" :style="getStyleSortArrow" />
        </button>
    </section>
</template>

<script>
export default {
    data() {
        return {
            filterBy: {
                txt: '',
                sort: -1
            }
        }
    },
    methods: {
        onSetFilterBy() {
            this.$emit('filter', this.filterBy)
        },
        onSetSortBy() {
            this.filterBy.sort = this.filterBy.sort * -1
            this.$emit('filter', this.filterBy)
        }
    },
    computed: {
        getStyleSortArrow() {
            return {
                transform: this.filterBy.sort === 1 ? 'rotate(180deg)' : ''  
            }
        }
    }
}
</script>

<style lang="scss"></style>