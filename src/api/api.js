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

export const messagesAPI = {
    getMessages(id) {
        return instance.get(`messages/` + id);
    },
    sendMessage(newMessage) {
        return instance.post(`messages`, { newMessage } );
    }
};

export const dialogsAPI = {
    getDialogs() {
        return instance.get(`dialogs`);
    },
    setDialog(id) {
        return instance.post(`dialogs`, {id})
    }
};

export const notifyAPI = {
    getNotifications() {
        return instance.get(`notify`);
    },
    setNotification(notifyData) {
        return instance.post(`notify`, notifyData)
    },
    updateNotifications(id) {
        return instance.put(`notify`, {id: id, status: 'read'}).then( res => console.log(res.data))
    }
};

