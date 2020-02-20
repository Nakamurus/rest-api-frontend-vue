import { userService } from '../services/auth_service';
import router from '../router/index'

const user = JSON.parse(localStorage.getItem('user'));
const state = user // if user is saved in local storage. status is logged in, otherwise null.
    ? { status: { loggedIn: true }, user}
    : { status: {}, user: null };

const mutations = {
    loginRequest(state, user) {
        state.status = { loggingIn: true };
        state.user = user;
    },
    loginSuccess(state, user) {
        state.status = { loggedIn: true };
        state.user = user;
    },
    loginFailure(state) {
        state.status = {};
        state.user = null;
    },
    logout(state) {
        state.status = {};
        state.user = null;
    },
    registerRequest(state) {
        state.status = { registering: true };
    },
    registerSuccess(state) {
        state.status = {};
    },
    registerFailure(state) {
        state.status = {};
    }
}

const actions = {
    async loginAction({ dispatch, commit }, {email, password}) {
        commit('loginRequest', { email });

        userService.login(email, password)
            .then(
                user => {
                    commit('loginSuccess', user);
                    router.push('/');
                },
                error => {
                    commit('loginFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
    logoutAction({ commit }) {
        userService.logout();
        commit('logout');
    },
    async registerAction({ dispatch, commit }, user) {
        commit('registerRequest', user);
        try {
            const res = await userService.register(user)
            commit('registerSuccess', res);
            await router.push('/login');
            dispatch('alert/successAction', 'Registration successful', { root: true });
        } catch (error) {
            commit('registerFailure', error);
            dispatch('alert/errorAction', error, { root: true });
        }
    }
};

export const account = {
    namespaced: true,
    state,
    actions,
    mutations
}