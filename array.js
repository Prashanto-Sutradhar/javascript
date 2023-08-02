var array = [10, 20, 30, 40, 50, 60, 70];
console.log(array);

//length of array.....................
console.log(array.length);


//array index................
console.log(array[5]);


//array index change the value............
array[5] = 742;
array[6] = 1861;
console.log(array);


// vary able name change or get element value by index ....................
var element = array;
element[5] = 8888;
element[6] = 9999;
console.log(element);
// find index of element..............
var positionOfIndex = array.indexOf(30);
console.log(positionOfIndex);
//slise........
var num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var number = num.slice(5, 7);
console.log(number);