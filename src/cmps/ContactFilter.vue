<template>
    <section class="contact-filter">
        <h3>Search: </h3>
        <label for="name">Contact's name:</label>
        <input class="input" @input="onSetFilterBy" v-model="filterBy.txt" type="text" id="name">

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
                sort: null
            }
        }
    },
    methods: {
        onSetFilterBy() {
            this.$emit('filter', this.filterBy)
        },
        onSetSortBy() {            
            if (!this.filterBy.sort) this.filterBy.sort = 1
            else this.filterBy.sort = this.filterBy.sort * -1
            this.$emit('filter', this.filterBy)
        }
    },
    computed: {
        getStyleSortArrow() {
            return {
                transform: this.filterBy.sort === 1 ? 'rotate(180deg)' : ''
            }
        },

    }
}
</script>

<style lang="scss"></style>