const fibonacci = [2, 5];
for (let i = 2; i <= 5; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci);