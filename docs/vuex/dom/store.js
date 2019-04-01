import Vue from 'vue';
import actions from './actions';
import getters from './getters';
import {
    ZVUETITLE,
    ZVUEDESCRIPTION,
    ZVUEKEYWORDS,
} from '../mutation-types';

const initState = {
  title: null,
  description: null,
  keywords: null
};

const mutations = {
  [ZVUETITLE] (state, payload) {
    state.title = payload
    document.title = payload
  },

  [ZVUEDESCRIPTION] (state, payload) {
    state.description = payload
    document.head.querySelector('meta[name=description]').content = payload
  },

  [ZVUEKEYWORDS] (state, payload) {
    state.keywords = payload
    document.head.querySelector('meta[name=keywords]').content = payload
  }
};

export default {
    state: initState,
    mutations,
    actions,
    getters,
};
