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
    },
    getCompanyInformation(id) {
        return instance.get(`profile/` + id)
    }
};

export const meetsAPI = {
    getMeets(userID, type) {
        return instance.get(`meets/?id=` + userID + '&type=' + type );
    },
    setMeet(meet) {
        return instance.post(`meets`, {
            bid: meet.bid,
            cid: meet.cid,
            stand: meet.stand,
            date: meet.date,
            time: meet.time,
            status: 1
        })
    },
    deleteMeet(id) {
        return instance.delete(`meets/?mid=` + id );
    }
};

export const companiesAPI = {
    getCompanies() {
        return instance.get(`profile`);
    }
};