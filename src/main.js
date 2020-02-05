import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import icons from './plugins/icons';

Vue.config.productionTip = false;

Vue.use(icons);

new Vue({
    router,
    store,
    render: function(h) {
        return h(App);
    },
}).$mount('#app');
