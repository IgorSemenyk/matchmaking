let initialState = {
    expoDate: {
        start: '27.11.2019',
        finish: '31.11.2019'
    },
    notifications: [
        {id: 0, type: 'adm', date: '27.11.2019', status: 'new', message: 'Hello! Welcome to our new system! You can read our rule there'},
        {id: 1, type: 'meets', date: '26.11.2019', status: 'new', message: 'You have new meet request with this company'},
        {id: 3, type: 'chat', date: '26.11.2019', status: 'new', message: 'Send answer for Microsoft in yours Chats'}

    ],
    lang: 'RUS'
};

let commonReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return {
                ...state
            }
    }
};

export default commonReducer;