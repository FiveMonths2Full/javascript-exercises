const palindromes = function (str) {
    str.toLowerCase();
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890";
    reverseStr = str.split("").reverse().filter(char => alphanumerical.includes(char)).join("");
    return reverseStr === str ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
