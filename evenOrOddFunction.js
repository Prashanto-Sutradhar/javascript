// function evenOrOdd(number) {
//     var reminder = number % 2;
//     if (reminder === 0) {
//         console.log('even ')
//     } else {
//         console.log('odd')
//     }
// }
// var num = 2;
// num = evenOrOdd(num);
// // console.log(num);
function evenOrOdd(number) {
    var reminder = number % 2;
    if (reminder === 0) {
        return true;
    } else {
        return false;
    }

}
const myNumber = evenOrOdd(303);
console.log(myNumber);
const yourNumber = evenOrOdd(400);
console.log(yourNumber)