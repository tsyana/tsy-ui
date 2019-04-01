import Directives from './directives';
import Components from './components';

// require('./stylus/main.styl'); // eslint-disable-line global-require

function plugin(VueA) {
    const Vue = VueA;
    // register directives
    Object.keys(Directives).forEach((key) => {
        Vue.directive(key.replace(/^[A-Z]/, k => k.toLowerCase()), Directives[key]);
    });

    // register components
    Object.keys(Components).forEach((key) => {
        Vue.use(Components[key]);
    });
    
    var ElementUI = require('element-ui')
    require('../theme/index.css')
    require('./components/iview.css')

    Vue.use(ElementUI);
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

export default plugin;
