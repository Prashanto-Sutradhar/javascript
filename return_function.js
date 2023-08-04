// function bringSingara(money) {

//     var singra = 10;
//     var quantity = money / singra;
//     return quantity;

// }
// //call function...........
// var myTaka = 500;
// var singra = bringSingara(myTaka);
// console.log("singras quantity:-", singra);



//avarage calculator.......
function getAvarage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const avarage = total / 3;
    return avarage;

}
const mark1 = 60;
const mark2 = 55;
const mark3 = 58;
var marks = getAvarage(mark1, mark2, mark3);
console.log("My Assignments avarag marks:", marks);