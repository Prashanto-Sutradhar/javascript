function duplicateArray(names) {

    const unique = [];
    for (let i = 0; i <= names.length; i++) {
        const index = i;
        const element = names[index];
        if (unique.includes(element) == false) {
            unique.push(element)
        }
    }
    return unique;


}
const names = ['munna', 'abid', 'jitu', 'himu', 'munna', 'abid', 'jitu', 'himu', 'munna', 'abid', 'jitu', 'himu'];

const result = duplicateArray(names);
console.log(result);