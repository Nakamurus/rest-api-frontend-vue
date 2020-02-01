import http from './http-common';

class CRUDService {
    ProdGetAll() {
        return http.get('/feed/posts');
    }
    ProdGet(id) {
        return http.get(`/feed/${id}`);
    }

    ProdCreate(data) {
        return http.post('/feed/post', data);
    }

    ProdUpdate(id, data) {
        return http.post(`/feed/${id}`, data);
    }
    ProdDelete(id) {
        return http.delete(`/feed/${id}`);
    }
    AuthLogin(user) {
        return http.post('/auth/login', user);
    }
    AuthSignup(user) {
        return http.post('/auth/signup', user);
    }
}

export default new CRUDService();