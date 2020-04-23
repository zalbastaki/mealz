import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/index.vue';
import Salads from '../views/salads.vue';
import Soups from '../views/soups.vue';
import Starters from '../views/starters.vue';
import Mains from '../views/mains.vue';
import Settings from '../views/settings.vue';
import PageNotFound from '../views/page-not-found.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/salads',
        name: 'salads',
        component: Salads,
    },
    {
        path: '/soups',
        name: 'soups',
        component: Soups,
    },
    {
        path: '/starters',
        name: 'starters',
        component: Starters,
    },
    {
        path: '/mains',
        name: 'mains',
        component: Mains,
    },
    {
        path: '/settings',
        name: 'settings',
        component: Settings,
    },
    {
        path: '/*',
        name: 'page-not-found',
        component: PageNotFound,
    },
];

const router = new VueRouter({
    base: window.location.pathName,
    routes,
});

export default router;
