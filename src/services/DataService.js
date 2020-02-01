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
    AuthLogin() {
        return http.post('/login');
    }
    AuthSignup() {
        return http.put('/auth/signup');
    }
}

export default new CRUDService();