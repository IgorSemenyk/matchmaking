import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://anigo.com.ua/api/',
    withCredentials: true,
    headers: {
        'API-KEY': '9999-9999-9999-9999'
    }
});

export const authAPI = {
    me() {
        return instance.get(`auth`);
    },
    login(login, password) {
        return instance.post(`auth`, {
            login : login,
            password: password
        });
    },
    logout() {
        return instance.delete(`auth`);
    }
};