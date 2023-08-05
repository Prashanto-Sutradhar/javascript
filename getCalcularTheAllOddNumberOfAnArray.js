function getSumOfAnyArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);

    }
    return sum;

}


function getOddNumberOfAnArray(numbers) {
    let oddNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            console.log(index, element)
            oddNumber.push(element)
        }

    }
    return oddNumber;
}




// const SecondArray = [10, 21, 455, 50, 77, 80, 90];
// getOddNumberOfAnArray(SecondArray)
// console.log(SecondArray)



const numberOfArray = [10, 21, 30, 455, 50, 60, 77, 80, 90, 100];
const oddNumber = getOddNumberOfAnArray(numberOfArray)
getSumOfAnyArray(numberOfArray)
console.log(oddNumber);
const oddNumbersSum = getSumOfAnyArray(oddNumber);
console.log("odd number sum:-", oddNumbersSum);