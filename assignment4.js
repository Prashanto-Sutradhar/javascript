function cubeNumber(number) {
    if (typeof number === 'number' && number > 0 && Number.isInteger(number)) {
        number = number ** 3;
        return number;
    } else {
        return "This is an invalid number.Please enter an integer valid number.";
    }
}
// console.log(cubeNumber(3));
// console.log(cubeNumber(4));
// console.log(cubeNumber(7.5));
// console.log(cubeNumber(-100));
// console.log(cubeNumber("Mr.Boss"));

function matchFinder(string1, string2) {
    if (typeof string1 === 'string' && typeof string2 === 'string' && string1.includes(string2)) {
        return true;
    } else if (typeof string1 !== 'string' ||
        typeof string2 !== 'string') {
        return "This is not a string input. Please check your input "
    } else {
        return false;
    }
}
// console.log(matchFinder('John Doe', 'ohn'));
// console.log(matchFinder('JavaScript', 'Code'));
// console.log(matchFinder('Peter Parker', 'Pen'));
// console.log(matchFinder('Peter Parker', 'pet'));
// console.log(matchFinder('John Doe', 50));

function sortMaker(arr) {
    if (Array.isArray(arr) || arr.length == 2) {
        if (typeof arr[0] !== 'number' || typeof arr[1] !== 'number' ||
            arr[0] < 0 || arr[1] < 0) {
            return 'Invalid Input Number'
        } else if (arr[0] < arr[1]) {
            return [arr[1], arr[0]];
        } else if (arr[0] > arr[1]) {
            return [arr[0], arr[1]];
        } else {
            return 'Equal number';
        }
    } else {
        return 'This is Invalid Input'
    }
}
// console.log(sortMaker([2, 3]));
// console.log(sortMaker([4, 2]));
// console.log(sortMaker([4, 4]));
// console.log(sortMaker([1, 2]));
// console.log(sortMaker([4, -2]));
// console.log(sortMaker('hello'));

function findAddress(obj) {
    let output = '';
    if (obj.street !== undefined) {
        output = output + obj.street + ',';
    } else {
        output = output + '__,';
    }
    if (obj.house !== undefined) {
        output = output + obj.house + ',';
    } else {
        output = output + '__,';
    }
    if (obj.society !== undefined) {
        output = output + obj.society;
    } else {
        output = output + '__';
    }
    return output;
}
// console.log(findAddress({ street: 10, house: "15A", society: "Earth Perfect" }));
// console.log(findAddress({ street: 10, society: "Earth Perfect" }));
// console.log(findAddress({ street: 10 }));

function canPay(changeArray, totalDue) {
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        const index = i;
        const element = changeArray[index]
        sum = sum + element;
    }
    if (changeArray.length === 0) {
        return "This is an Invalid Input";
    }
    if (sum >= totalDue) {
        return true;
    } else {
        return false;
    }
}
// console.log(canPay([1, 2, 5], 10));
// console.log(canPay([1, 5, 5], 10));
// console.log(canPay([], 10));