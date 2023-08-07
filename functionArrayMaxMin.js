function arrayMax(number) {
    var largeNumber = number[0];
    for (let i = 0; i < number.length; i++) {
        var index = i;
        var element = number[index];
        if (element > largeNumber) {
            largeNumber = element;

        }
    }
    return largeNumber;


}
var number = [150, 841, 695, 999, 500, 100];
var result = arrayMax(number);
console.log(" Max Number In This Array is :", result);


//ArrayMin
function arrayMin(numbers) {
    var largeNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        var indexing = i;
        var elements = numbers[indexing];
        if (elements < largeNumber) {
            largeNumber = elements;

        }
    }
    return largeNumber;


}
var numbers = [150, 841, 695, 999, 500, 100];
var results = arrayMin(numbers);
console.log(" Max Number In This Array is :", results);