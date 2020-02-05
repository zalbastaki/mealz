<template>
    <div>
        <food-picker food-type="salads" />
        <food-picker food-type="soups" />
        <food-picker food-type="starters" />
        <food-picker food-type="mains" />

        <button class="reset-btn" @click.prevent="resetChosen">
            Reset
        </button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import FoodPicker from './FoodPicker';

    export default {
        name: 'meal-picker',

        components: {
            FoodPicker,
        },

        methods: {
            ...mapActions('food', ['resetChosen']),
        },
    };
</script>

<style lang="scss" scoped>
    .reset-btn {
        color: #fff;
        background: $dark-grey;
        border-radius: 5px;
        padding: 5px 15px;
        font-size: 14px;
        margin-top: 20px;
        width: calc(100vw - 100px);

        &:focus {
            outline: none;
        }
    }
</style>
