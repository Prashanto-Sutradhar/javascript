var mobile = [

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
        name: 'samsung',
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
        name: 'Oppo',
        ram: 32,
        price: 15000,
        color: 'pink',
        country: 'india'
    }

]

function price(mobile) {

    let cheapestPrice = mobile[0];
    for (let i = 0; i < mobile.length; i++) {
        const index = i;
        const phone = mobile[index];
        if (phone.price < cheapestPrice.price) {
            cheapestPrice = phone;
        }

    }
    return cheapestPrice
}

const cheapPriceMobile = price(mobile)
console.log(cheapPriceMobile);