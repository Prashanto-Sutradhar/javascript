var a = 10;
var b = 20;
var c = 30;
if (a > b && a > c) {
    console.log("max number is : A")
} else if (b > a && b > c) {
    console.log("max number is : B")
} else {
    console.log("max number is : C")
}


function minimumValue(a1, b1, c1) {
    if (a1 > b1 && a1 > c1) {
        console.log("max number is : A1")
        return a1;
    } else if (b1 > a1 && b1 > c1) {
        console.log("max number is : B1")
        return b1;
    } else {
        console.log("max number is : C1")
        return c1;
    }

}
var a1 = 635;
var b1 = 5426;
var c1 = 555;
var result = minimumValue(a1, b1, c1);
console.log(result);

function minimumValue2(a2, b2, c2) {
    return Math.min(a2, b2, c2)
}
var a2 = 635;
var b2 = 5426;
var c2 = 666;
var result2 = minimumValue2(a2, b2, c2);
console.log(result2);