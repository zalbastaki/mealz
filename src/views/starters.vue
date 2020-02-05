<template>
    <div>
        <food-list food-type="starters" />
    </div>
</template>

<script>
    import FoodList from '../components/FoodList';

    export default {
        name: 'starters',

        components: {
            FoodList,
        },
    };
</script>
