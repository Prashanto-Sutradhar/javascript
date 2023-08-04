var mobile = {
    brand: 'samsung',
    price: 58000,
    ram: "16gb",

}
var propatis = Object.keys(mobile);
var propatisValues = Object.values(mobile);
console.log("keys name:", propatis);
console.log("values:   ", propatisValues);

//vs for loop......
for (var i = 0; i < propatis.length; i++) {
    console.log(propatis[i]);
}
j