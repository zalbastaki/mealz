<template>
    <div class="food-picker">
        <h2 class="heading">{{ foodType | singular }}</h2>

        <template v-if="food.length > 0">
            <div class="food-item" :class="{ chosen }">
                {{ food[index].name }}
            </div>

            <div v-if="!chosen" class="buttons">
                <button
                    class="recalc-btn"
                    ref="recalc-btn"
                    @click.prevent="recalc"
                >
                    <fa-icon :icon="['fas', 'undo']" aria-label="recalculate" />
                </button>

                <button class="btn" @click.prevent="pick">
                    Choose!
                </button>
            </div>
        </template>

        <div v-else class="no-options">
            <a class="btn" :href="`/${foodType}`">Add Options</a>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'food-picker',

        props: {
            foodType: {
                type: String,
                required: true,
            },
        },

        filters: {
            singular(value) {
                if (value.slice(-1) !== 's') {
                    return value;
                }

                const str = value.slice(0, -1);
                return str;
            },
        },

        data() {
            return {
                index: 0,
                deg: 0,
            };
        },

        computed: {
            ...mapState('settings', ['daysNoRepeat']),

            ...mapState('food', ['chosenItems']),

            chosen() {
                if (!this.chosenItems[this.foodType]) {
                    return null;
                }

                return this.chosenItems[this.foodType];
            },

            food() {
                return this.$store.state.food[this.foodType];
            },
        },

        mounted() {
            if (this.food.length > 0) {
                this.getIndex();
            }
        },

        methods: {
            ...mapActions('food', ['pickItem']),

            recalc() {
                this.deg -= 360;
                this.$refs[
                    'recalc-btn'
                ].style.transform = `rotate(${this.deg}deg)`;

                this.getIndex();
            },

            pick() {
                this.pickItem({ foodType: this.foodType, index: this.index });
            },

            randomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            },

            getIndex() {
                let count = 0;
                let index = this.randomInt(this.food.length);

                while (
                    this.recentlyUsed(this.food[index]) &&
                    count !== this.food.length
                ) {
                    index = this.randomInt(this.food.length);
                    count++;
                }

                this.index = index;
            },

            recentlyUsed(foodItem) {
                if (
                    !foodItem.lastPicked ||
                    this.daysAgo(foodItem.lastPicked) >= this.daysNoRepeat
                ) {
                    return false;
                }

                return true;
            },

            daysAgo(idate) {
                const date = new Date(idate);
                const today = new Date();
                const timeDif = date.getTime() - today.getTime();
                return timeDif / (1000 * 3600 * 24);
            },
        },
    };
</script>

<style lang="scss" scoped>
    .food-picker {
        margin-bottom: 20px;
    }

    .heading {
        text-transform: capitalize;
        font-size: 17px;
        margin-bottom: 10px;
        opacity: 0.5;
    }

    .food-item {
        font-size: 20px;
        font-weight: bold;
        text-transform: capitalize;
        color: $dark-grey;
        background: #fff;
        padding: 10px 20px;
        margin-bottom: 10px;
        border-radius: 10px;
        box-shadow: 1px 2px 10px 1px rgba(219, 219, 219, 1);
        display: flex;
        align-items: center;
        justify-content: center;

        &.chosen {
            box-shadow: none;
            border: 1px solid $dark-grey;
        }
    }

    .buttons {
        display: flex;
        justify-content: flex-end;
    }

    .recalc-btn {
        color: $dark-grey;
        transform: rotate(0deg);
        transition: transform 0.5s linear;
        font-size: 14px;
    }

    .btn {
        color: $dark-grey;
        background: #fff;
        border-radius: 5px;
        padding: 3px 15px;
        font-size: 14px;
        text-decoration: none;
        border: 0;
    }

    .no-options {
        display: flex;
        justify-content: center;
    }
</style>
