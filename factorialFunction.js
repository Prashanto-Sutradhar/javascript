//factorial....5!  = 5*4*3*2*1=120;

function factorial(number) {
    var multipication = 1;
    for (let i = 1; i <= number; i++) {
        multipication = multipication * i;
        // console.log(multipication);
        // console.log(i);
    }
    return multipication;



}
var result = factorial(5);
console.log(result)