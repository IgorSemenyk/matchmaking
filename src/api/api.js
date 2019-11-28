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

export const commonAPI = {
    getCommonData(id) {
      return instance.get(`common`)
    },
    readNotify(id) {
        return instance.put(`common/notify`, {
            id: id,
            status: 'read'
        })
    }
};

export const profileAPI = {
    getProfileData() {
        return instance.get(`profile/me`);
    },
    sendProfileData(data) {
        return instance.put(`profile`, data);
    }
};