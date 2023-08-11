/*
first 100 ticket price=100tk 
second 101-200 ticket price=80tk
3rd 201+++ ticket price=70tk
*/
function ticketPrice(ticketQuantity) {

    const ticketPrice = 100;
    const secondPrice = 80;
    const thirdPrice = 70;
    if (ticketQuantity <= 100) {
        const ticketPriceIs = ticketQuantity * 100;
        return ticketPriceIs;
    } else if (ticketQuantity <= 200) {

        const ticketPriceIs = 100 * 100;
        const ticketPriceIsSecond = (ticketQuantity - 100) * 80;
        const ticketSecondPrice = ticketPriceIs + ticketPriceIsSecond
        return ticketSecondPrice;

    } else {
        const ticketPriceIs = 100 * 100;
        const ticketPriceIsSecond = 100 * 80;
        const ticketPriceIsThird = (ticketQuantity - 200) * 70;
        const ticketThirdPrice = ticketPriceIs + ticketPriceIsSecond + ticketPriceIsThird;
        return ticketThirdPrice;


    }


}
const ticketQuantity = 250;
const price = ticketPrice(ticketQuantity);
console.log('Total Amount of Ticket Is :', price);