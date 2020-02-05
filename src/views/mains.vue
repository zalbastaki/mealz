<template>
    <div>
        <food-list food-type="mains" />
    </div>
</template>

<script>
    import FoodList from '../components/FoodList';

    export default {
        name: 'mains',

        components: {
            FoodList,
        },
    };
</script>
