const sumAll = function(a,b) {
    let sum = 0;
    if(a  > 0 && b > 0 && Number.isInteger(a) && Number.isInteger(b)) {
        const largest = Math.max(a,b);
        const smallest = Math.min(a,b);
        for (let i = smallest; i <= largest; i++) {
            sum += i;
        }
    }
    else {
        return "ERROR"
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
