import { userService } from '../services/auth_service'

const state = {
    all: {}
};

const actions = {
    getAll({ commit }) {
        commit('getAllRequest');

        userService.getAll().then(
            users => commit('getAllSuccess', users),
            err => commit('getAllFailure', err)
        );
    },

    delete({ commit }, id) {
        commit('deleteRequest', id);

        userService.delete(id).then(
            () => commit('deleteSuccess', id),
            err => commit('deleteFailure', {id, err: err.toString() })
        );
    }
};

const mutations = {
    getAllRequest(state) {
        state.all = { loading: true };
    },
    getAllSuccess(state, users) {
        state.all = { items: users };
    },
    getAllFailure(state, err) {
        state.all = { err };
    },
    deleteRequest(state, id) {
        state.all.items = state.all.items.map(user =>
            user.id === id
            ? {...user, deleting: true }
            : user
        )
    },
    deleteSuccess(state, id) {
        state.all.items = state.all.items.filter(user => user.id !== id)
    },
    deleteFailure(state, { id, err }) {
        state.all.items = state.items.map(user => {
            if (user.id === id) {
                const { deleting, ...userCopy } = user; // eslint-disable-line
                return { ...userCopy, deleteError: err };
            }

            return user;
        })
    }
};

export const users = {
    namespaced: true,
    state,
    actions,
    mutations
}