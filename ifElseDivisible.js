/*

element % 3=0 ----foo
element % 5=0 ----bar
element % 3=0 && element % 5=0 ----foobar

*/
for (let i = 1; i <= 50; i++) {

    if (i % 3 === 0) {
        console.log("foo");
    } else if (i % 5 === 0) {
        console.log("bar");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("foobar");
    } else {
        console.log(i);
    }
}