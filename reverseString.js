function reverseString(sentence) {
    let reverse = '';
    for (let i = sentence.length - 1; i >= 0; i--) {
        const element = sentence[i];

        reverse = reverse + element;
        console.log(element, reverse)


    }
    return reverse;

}
const sentence = " I am a good boy "
const reverse = reverseString(sentence)
    // console.log(sentence);