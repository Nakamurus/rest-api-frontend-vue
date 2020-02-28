// import http from './http-common';

// class ProdService {
//     GetAll() {
//         return http.get('/feed/posts').then(handleResponse);
//     }

//     GetById(id) {
//         return http.get(`/feed/${id}`).then(handleResponse);
//     }

//     Create(prod) {
//         return http.post('/feed/post', prod).then(handleResponse);
//     }

//     CreateB(prod) {
//         return fetch('http://localhost:3000/feed/post', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(prod)
//         }).then(handleResponse)
//     }

//     Update(id) {
//         return http.put(`/feed/post/${id}`).then(handleResponse);
//     }

//     Delete(id) {
//         return http.delete(`/feed/post/${id}`).then(handleResponse);
//     }
// }

// export default new ProdService()