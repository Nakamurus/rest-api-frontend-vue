const state = {
    type: null,
    message: null
};

const actions = {
    successAction({ commit }, message) {
        commit('success', message);
    },
    errorAction({ commit }, message) {
        commit('error', message);
    },
    clearAction({ commit }, message) {
        commit('clear', message);
    }
};

const mutations = {
    success(state, message) {
        state.type = 'alert-success';
        state.message = message;
    },
    error(state, message) {
        state.type = 'alert-danger';
        state.message = message;
    },
    clear(state) {
        state.type = null;
        state.message = null;
    }
};

export const alert = {
    namespaced: true,
    state,
    actions,
    mutations
}