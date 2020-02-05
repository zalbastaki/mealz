<template>
    <div>
        <food-list food-type="salads" />
    </div>
</template>

<script>
    import FoodList from '../components/FoodList';

    export default {
        name: 'salads',

        components: {
            FoodList,
        },
    };
</script>
