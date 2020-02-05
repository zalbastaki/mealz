<template>
    <div>
        <h2 class="heading">{{ foodType }}</h2>
        <ul class="food-list">
            <li
                v-for="(foodItem, index) in food"
                :key="index"
                class="food-item"
            >
                <span>
                    {{ foodItem.name }}
                </span>
                <button @click.prevent="remove(index)">
                    <fa-icon
                        :icon="['fas', 'times-circle']"
                        aria-label="remove"
                    />
                </button>
            </li>
            <hr />
            <li class="food-item food-input">
                <form @submit.prevent="add">
                    <input v-model="newItem.name" placeholder="Add Item" />
                    <button @click.prevent="add">
                        <fa-icon
                            :icon="['fas', 'plus-circle']"
                            aria-label="add"
                        />
                    </button>
                </form>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'food-list',

        props: {
            foodType: {
                type: String,
                required: true,
            },
        },

        data() {
            return {
                showInput: false,
                newItem: {
                    name: '',
                    lastPicked: null,
                },
            };
        },

        computed: {
            food() {
                return this.$store.state.food[this.foodType];
            },
        },

        methods: {
            ...mapActions('food', ['addItem', 'deleteItem']),

            add() {
                this.addItem({ foodType: this.foodType, item: this.newItem });
                this.newItem = {
                    name: '',
                    lastPicked: null,
                };
            },

            remove(index) {
                this.deleteItem({ foodType: this.foodType, index });
            },
        },
    };
</script>

<style lang="scss" scoped>
    .heading {
        text-transform: capitalize;
        margin-bottom: 20px;
        color: $dark-grey;
    }

    .food-list {
        list-style: none;
        padding: 0;
        margin: 0;

        .food-item {
            text-transform: capitalize;
            background: #fff;
            padding: 10px 20px;
            margin-bottom: 10px;
            border-radius: 10px;
            -webkit-box-shadow: 1px 2px 11px 4px rgba(219, 219, 219, 1);
            -moz-box-shadow: 1px 2px 10px 1px rgba(219, 219, 219, 1);
            box-shadow: 1px 2px 11px 4px rgba(219, 219, 219, 1);
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: $dark-grey;

            button {
                color: $dark-grey;
            }
        }

        .food-input {
            background: $dark-grey;
            margin-top: 10px;

            form {
                display: flex;
                align-items: center;
                width: 100%;

                input {
                    flex: 1;
                    background: $dark-grey;
                    color: #ddd;
                    border: 0;

                    &::placeholder {
                        color: #999;
                    }

                    &:focus {
                        outline: none;
                    }
                }
            }

            button {
                color: #fff;
            }
        }
    }
</style>
