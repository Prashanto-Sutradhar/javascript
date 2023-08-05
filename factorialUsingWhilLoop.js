// function factorial(numbers) {

//     var num = 1;
//     var result = 1;
//     while (num <= numbers) {
//         result = result * num;
//         num++;
//     }
//     return result;
// }
// var number = 7;
// var result = factorial(number);
// console.log("factorial ", number, ":-", result);


// revers way.........
function factorial(numbers) {

    var num = number;
    var result = 1;
    while (num >= 1) {
        result = result * num;
        num--;
    }
    return result;
}
var number = 7;
var result = factorial(number);
console.log("factorial ", number, ":-", result);