var mobiles = [

        {
            name: 'walton',
            ram: 8,
            price: 10000,
            color: 'block',
            country: 'bangladesh'
        },

        {
            name: 'iPhone',
            ram: 8,
            price: 145000,
            color: 'block',
            country: 'japan'
        },

        {
            name: 'samsung phone',
            ram: 16,
            price: 60000,
            color: 'block',
            country: 'Uk'
        },
        {
            name: 'Xaomi',
            ram: 32,

            price: 55000,
            color: 'block',
            country: 'china'
        },

        {
            name: 'Oppo phone',
            ram: 32,
            price: 15000,
            color: 'pink',
            country: 'india'
        }

    ]
    // for (const mobile of mobiles) {
    //     console.log(mobile);
    // }

function matching(mobiles, search) {
    const matched = [];
    for (const mobile of mobiles) {
        if (mobile.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(mobile)
        }
    }
    return matched;

}
const product = matching(mobiles, 'phone');
console.log(product);