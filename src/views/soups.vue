<template>
    <div>
        <food-list food-type="soups" />
    </div>
</template>

<script>
    import FoodList from '../components/FoodList';

    export default {
        name: 'soups',

        components: {
            FoodList,
        },
    };
</script>
