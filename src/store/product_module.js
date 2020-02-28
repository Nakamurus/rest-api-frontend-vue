import ProdService from '../services/product_service'

const state = {
    products: [],
    isFetching: false
};

const mutations = {
    pushProducts(state, prod) {
        state.products.push(prod);
    },
    fetChingSuccess(state) {
        state.isFetching = true;
    }
}

const actions = {
    getAllActiion({ commit }, prods) {
        commit('pushProducts', prods)
    },
    getOneAction(){

    },
    createAction({ commit }, prod){
        commit('fetchingSuccess');
        return ProdService.CreateB(prod)
    },
    deleteAction(){
    }
}

export const products = {
    namespaced: true,
    state,
    actions,
    mutations
}