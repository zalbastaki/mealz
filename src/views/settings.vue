<template>
    <div>
        <h2 class="heading">Settings</h2>

        <input
            type="number"
            id="days-no-repeat"
            name="days-no-repeat"
            v-model="days"
        />
        <label class="help-text" for="days-no-repeat">
            days without repeating
        </label>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'settings',

        computed: {
            ...mapState('settings', ['daysNoRepeat']),

            days: {
                get() {
                    return this.daysNoRepeat;
                },

                set(newVal) {
                    if (newVal === '') {
                        return;
                    }

                    this.changeDaysNoRepeat(newVal);
                },
            },
        },

        methods: {
            ...mapActions('settings', ['changeDaysNoRepeat']),
        },
    };
</script>

<style lang="scss" scoped>
    .heading {
        text-transform: capitalize;
        margin-bottom: 30px;
        color: $dark-grey;
    }

    #days-no-repeat {
        text-align: center;
        color: $dark-grey;
        outline: none;
        height: 40px;
        border: 0;
        border-radius: 10px;
        box-shadow: 1px 2px 11px 4px #dbdbdb;
        width: 100%;
    }

    .help-text {
        font-style: italic;
        opacity: 0.4;
        font-size: 12px;
        display: block;
        margin-top: 10px;
        text-align: right;
    }
</style>
