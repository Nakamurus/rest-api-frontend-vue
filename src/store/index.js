import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import { alert } from './alert_module';
import { account } from './account_module';
import { users } from './users_module';

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    alert,
    account,
    users
  },
  plugins: [createPersistedState()]
})