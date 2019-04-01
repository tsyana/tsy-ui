import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import highlight from 'highlight.js/lib/highlight.js'
import highlightBash from 'highlight.js/lib/languages/bash'
import highlightXML from 'highlight.js/lib/languages/xml'
import highlightJS from 'highlight.js/lib/languages/javascript'
import highlightScss from 'highlight.js/lib/languages/scss'

import App from './App.vue'
import Components from './components'
import store from './vuex/index'
import router from './router'
import hljs from './directives/highlight'
import ElementUI from 'element-ui';
import '../theme/index.css';
Vue.use(ElementUI);
import CDPVue from '../src/'
import './stylus/_main.scss'
Vue.use(CDPVue);
import 'highlight.js/styles/github.css';
// register highlight
highlight.registerLanguage('bash', highlightBash)
highlight.registerLanguage('scss', highlightScss)
highlight.registerLanguage('sass', highlightScss)
highlight.registerLanguage('html', highlightXML)
highlight.registerLanguage('js', highlightJS)

// register global directive
Vue.directive('highlight', hljs);

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

// register global components.
Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
const app = new Vue({
  router,
  store,
  ...App
})

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
export { app, router, store }
