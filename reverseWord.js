function reverseWord(str) {
    let word = str.split(' ');
    let result = [];
    for (let i = word.length - 1; i >= 0; i--) {
        const index = i;
        const element = word[index];
        result.push(element)

    }
    const reverse = result.join(' ');
    return reverse;
}
const word = " I am a good boy";
const reverse = reverseWord(word);
console.log(reverse);