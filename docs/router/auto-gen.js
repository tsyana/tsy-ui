const demo = [
    { path: '/components/affix/1', component: require('../views/components/affix/1.vue') },
    { path: '/components/backtop/1', component: require('../views/components/backtop/1.vue') },
    { path: '/components/drawer/1', component: require('../views/components/drawer/1.vue') },
    { path: '/components/floatlabel/1', component: require('../views/components/floatlabel/1.vue') },
    { path: '/components/scrollspy/1', component: require('../views/components/scrollspy/1.vue') },
    { path: '/directives/tooltip/1', component: require('../views/directives/tooltip/1.vue') },
];
const components = [
    { path: 'affix', component: require(/* webpackChunkName: "affix" */'../views/components/affix/affix.vue'),
                meta: { api: require('../views/components/affix/api.js')} },
    { path: 'backtop', component: require(/* webpackChunkName: "backtop" */'../views/components/backtop/backtop.vue'),
                meta: { api: require('../views/components/backtop/api.js')} },
    { path: 'drawer', component: require(/* webpackChunkName: "drawer" */'../views/components/drawer/drawer.vue'),
                meta: { api: require('../views/components/drawer/api.js')} },
    { path: 'floatlabel', component: require(/* webpackChunkName: "floatlabel" */'../views/components/floatlabel/floatlabel.vue'),
                meta: { api: require('../views/components/floatlabel/api.js')} },
    { path: 'scrollspy', component: require(/* webpackChunkName: "scrollspy" */'../views/components/scrollspy/scrollspy.vue'),
                meta: { api: require('../views/components/scrollspy/api.js')} },
];
const directives = [
    { path: 'tooltip', component: require(/* webpackChunkName: "tooltip" */'../views/directives/tooltip/tooltip.vue'), 
                meta: { api: require('../views/directives/tooltip/api.js')} },
];
export default {
    demo,
    components,
    directives
};