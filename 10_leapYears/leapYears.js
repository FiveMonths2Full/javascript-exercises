const leapYears = (num) => 
    num % 400 === 0 ? true
    : num % 100 === 0 ? false
    : num % 4 === 0 ? true
    : false;


// Do not edit below this line
module.exports = leapYears;
