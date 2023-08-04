// normal way to do ................
//var inche = 12;
// var feet = inche / 12;
// var myFeet = feet;
// console.log(myFeet);


// var inche = 144;
// var feet = inche / 12;
// var friends = feet;
// console.log(friends);



//using function to do this problem solving.........


function inchesToFeet(inches) {
    var feet = inches / 12;
    console.log(feet);

}
var myFeet = 140;
myFeet = inchesToFeet(myFeet);
console.log(myFeet);