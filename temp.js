console.log("temp")


// wrong approach
// let f = 6;
// let s = 7;
// first = second;
// second = first;
// console.log(f, s);

//  approach:-1
var first = 6;
var second = 7;
// var temp = first;
// first = second;
// second = temp;
// console.log(first, second);


//approach:-2
[first, second] = [second, first];
console.log(first, second);