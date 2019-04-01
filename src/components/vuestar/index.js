import VueStar from './vuestar.vue';

VueStar.install = (Vue) => {
    Vue.component(VueStar.name, VueStar);
};

export default VueStar;
