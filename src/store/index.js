import Vue from 'vue';
import Vuex from 'vuex';

import createPersistedState from 'vuex-persistedstate';

import food from './food/index.js';
import settings from './settings/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],

    modules: {
        food,
        settings,
    },
});
