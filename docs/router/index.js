import Vue from 'vue'
import Router from 'vue-router'

import autoGen from './auto-gen.js'

Vue.use(Router)

// We are using Webpack code splitting here so that each route's associated
// component code is loaded on-demand only when the route is visited.
// It's actually not really necessary for a small project of this size but
// the goal is to demonstrate how to do it.
const QuickStart = () => System.import(/* webpackChunkName: "quick-start" */ '../views/QuickStart.vue');
const Components = () => System.import(/* webpackChunkName: "sub-router" */ '../views/SubRouter.vue');

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/',
            component: QuickStart
        },
        {
            path: '/quick-start',
            component: QuickStart
        },
        {
            path: '/components',
            component: Components,
            children: autoGen.components
        },
        {
            path: '/directives',
            component: Components,
            children: autoGen.directives
        }
    ].concat(autoGen.demo)
});
