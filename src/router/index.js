import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/index.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/mains',
        name: 'mains',
        component: function() {
            return import('../views/mains.vue');
        },
    },
    {
        path: '/salads',
        name: 'salads',
        component: function() {
            return import('../views/salads.vue');
        },
    },
    {
        path: '/settings',
        name: 'settings',
        component: function() {
            return import('../views/settings.vue');
        },
    },
    {
        path: '/soups',
        name: 'soups',
        component: function() {
            return import('../views/soups.vue');
        },
    },
    {
        path: '/starters',
        name: 'starters',
        component: function() {
            return import('../views/starters.vue');
        },
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
