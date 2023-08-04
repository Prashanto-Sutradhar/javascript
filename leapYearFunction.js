function leapYear(year) {
    var reminder = year % 4;
    if (reminder === 0) {
        return true;
    } else {
        return false;
    }

}
const years = leapYear(2020);
console.log(" is it leap year: ", years, ".");