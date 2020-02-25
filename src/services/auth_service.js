require('dotenv').config();
import { authHeader } from './auth-headers';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getByName,
    update,
    delete: _delete
};

async function login(email, password){
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password })
    };

    const response = await fetch(`${process.env.VUE_APP_APIBASEURL}/auth/login`, requestOptions);
    const user = await response.json()
    /* eslint-disable no-console */
    console.log(user)
    // login successful if there's a jwt  token in the response
    if (user.token) {
        // store user details and jwt token in local storage
        // to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
    }
    return user;
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register (user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${process.env.VUE_APP_APIBASEURL}/auth/signup`, requestOptions).then(handleResponse);
}

async function getAll() {
    const requestOptions = {
        method: 'GET',
        mode: 'cors',
        cresidentials: 'include',
        headers: authHeader()
    };

    const res = await fetch(`${process.env.VUE_APP_APIBASEURL}/auth/users`, requestOptions);
    return res.json()
}

function getByName(username) {
    const requestOptions = {
        method: 'GET',
        mode: 'cors',
        cresidentials: 'include',
        headers: authHeader()
    };

    return fetch(`${process.env.VUE_APP_APIBASEURL}/users/${username}`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        mode: 'cors',
        cresidentials: 'include',
        headers: { ...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };

    return fetch(`${process.env.VUE_APP_APIBASEURL}/auth/${user.id}`, requestOptions).then(handleResponse);
}

// prefixed name with underscore because of a reserved name in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        mode: 'cors',
        cresidentials: 'include',
        headers: authHeader()
    };

    return fetch(`${process.env.VUE_APP_APIBASEURL}/users/${id}`, requestOptions).then(handleResponse);
}

async function handleResponse(response) {
    const text = await response.text()
    const data = text && JSON.parse(text);
    if (!response.ok) {
        if (response.status === 401) {
            // auto logout if 401 response returned from api
            logout();
            location.reload(true); // ignore cache and force reload page
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }
    return data;
}


// class userService {
//     async Login(username, password) {
//         return http.post('/auth/login', { username, password })
//           .catch(error => {
//               alert(error.response.data.message)
//           })
//     }

//     Register(user) {
//         return http.put('/auth/signup', user)
//           .catch(error => {
//               alert(error.response.data.message)
//           })
//     }

//     Update(user) {
//         return http.put(`/auth/${user.id}`, JSON.stringify(user))
//           .then(handleResponse)
//     }
// }

// export default new userService();