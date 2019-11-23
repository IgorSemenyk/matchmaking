let initialState = {
    items: [
        {
            id : 1,
            name: 'Infinity Make Up',
            contact: 'Carmine Marotta',
            description: 'BEAUTY ACCESSORIES: , Bags & Pouches, Hair Brushes & Combs, Make Up Brushes, Other, Sponges, ' +
                'Puffs, Aplicators; DERMOCOSMETICS: , Sun Burn Creams; MAKE—UP & COLOR COSMETICS: , Blusher; MAKE—UP & ' +
                'COLOR COSMET:',
            stand: '1B 200',
            country: 'Italy',
            category: ['Bags & Pouches', 'Hair Brushes & Combs', 'Make Up Brushes', 'Other', 'Sponges', 'Puffs', 'Aplicators']
        },
        {
            id : 2,
            name: 'Infinity Make Up',
            contact: 'Carmine Marotta',
            description: 'BEAUTY ACCESSORIES: , Bags & Pouches, Hair Brushes & Combs, Make Up Brushes, Other, Sponges, ' +
                'Puffs, Aplicators; DERMOCOSMETICS: , Sun Burn Creams; MAKE—UP & COLOR COSMETICS: , Blusher; MAKE—UP & ' +
                'COLOR COSMET:',
            stand: '1B 200',
            country: 'Italy',
            category: ['Bags & Pouches', 'Hair Brushes & Combs', 'Make Up Brushes', 'Other', 'Sponges', 'Puffs', 'Aplicators']
        },
        {
            id : 3,
            name: 'Infinity Make Up',
            contact: 'Carmine Marotta',
            description: 'BEAUTY ACCESSORIES: , Bags & Pouches, Hair Brushes & Combs, Make Up Brushes, Other, Sponges, ' +
                'Puffs, Aplicators; DERMOCOSMETICS: , Sun Burn Creams; MAKE—UP & COLOR COSMETICS: , Blusher; MAKE—UP & ' +
                'COLOR COSMET:',
            stand: '1B 200',
            country: 'Italy',
            category: ['Bags & Pouches', 'Hair Brushes & Combs', 'Make Up Brushes', 'Other', 'Sponges', 'Puffs', 'Aplicators']
        },
        {
            id : 4,
            name: 'Infinity Make Up',
            contact: 'Carmine Marotta',
            description: 'BEAUTY ACCESSORIES: , Bags & Pouches, Hair Brushes & Combs, Make Up Brushes, Other, Sponges, ' +
                'Puffs, Aplicators; DERMOCOSMETICS: , Sun Burn Creams; MAKE—UP & COLOR COSMETICS: , Blusher; MAKE—UP & ' +
                'COLOR COSMET:',
            stand: '1B 200',
            country: 'Italy',
            category: ['Bags & Pouches', 'Hair Brushes & Combs', 'Make Up Brushes', 'Other', 'Sponges', 'Puffs', 'Aplicators']
        },
        {
            id : 5,
            name: 'Infinity Make Up',
            contact: 'Carmine Marotta',
            description: 'BEAUTY ACCESSORIES: , Bags & Pouches, Hair Brushes & Combs, Make Up Brushes, Other, Sponges, ' +
                'Puffs, Aplicators; DERMOCOSMETICS: , Sun Burn Creams; MAKE—UP & COLOR COSMETICS: , Blusher; MAKE—UP & ' +
                'COLOR COSMET:',
            stand: '1B 200',
            country: 'Italy',
            category: ['Bags & Pouches', 'Hair Brushes & Combs', 'Make Up Brushes', 'Other', 'Sponges', 'Puffs', 'Aplicators']
        }
    ]
};

const companiesReducer = (state = initialState, action) => {
    switch(action) {
        default:
            return {
                ...state
            }
    }
};

export default companiesReducer;