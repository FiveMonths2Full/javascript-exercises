const fibonacci = function(num) {
    let n = 0;
    for (let i = 0; i <= num; i++) {
        if (n != 0) {
            n = i -1;
        }
        let total = n + i;
        return total;

    }
};

// Do not edit below this line
module.exports = fibonacci;
