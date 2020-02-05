import AuthService from '../services/auth_service';
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
        try {
            const user = await AuthService.Login(email, password)
            commit('loginSuccess', user)
            router.push('/')
        } catch (error) {
            commit('loginFailure', error);
            dispatch('alert/error', error, {root: true });
        }
    },
    logoutAction({ commit }) {
        AuthService.Logout();
        commit('logout');
    },
    async registerAction({ dispatch, commit }, user) {
        commit('registerRequest', user);

        try {
            const user = await AuthService.Register(user)
            await commit('registerSuccess', user);
            router.push('/login');
            dispatch('alert/success', 'Registration successful', { root: true });
        } catch (error) {
            commit('registerFailure', error);
            dispatch('alert/error', error, { root: true });
        }
    }
};

export const account = {
    namespaced: true,
    state,
    actions,
    mutations
}