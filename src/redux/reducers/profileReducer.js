let initialState = {
    initialValue: {
        company: 'Anigo Web Studio',
        contactName: 'Varvarich Anton',
        jobTitle: 'Developer',
        country: 'Ukraine',
        telephone: '380934261735',
        email: 'anigo.studio@gmail.com',
        logotype: 'https://www.google.com.ua/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
        city: 'Kyiv',
        adress: 'Kyrrulivska street 159',
        website: 'https://anigo.com.ua',
        category: ['backend', 'frontend', 'fullstack'],
        interest: ['javascript', 'react', 'redux']
    },



};

const profileReducer = (state = initialState, action) => {
    return {
        ...state
    }
};

export default profileReducer;