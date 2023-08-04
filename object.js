var mobile = {
    brand: 'samsung',
    price: 58000,
    ram: "16gb",

}
var propatis = Object.keys(mobile);
var propatisValues = Object.values(mobile);
console.log(mobile);
console.log(mobile.ram);
console.log("keys name:", propatis);
console.log("values:   ", propatisValues);
var propartyName = mobile.ram;
var propartyNa = mobile['price'];
console.log(propartyName, propartyNa);
mobile.brand = "iPhone Xr";
mobile.ram = "20gb";
console.log(mobile)