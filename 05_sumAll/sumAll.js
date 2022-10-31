const sumAll = function(num1, num2) {
let result = 0;

if (typeof(num1) == 'number' && typeof(num2) == 'number') {   
    if (num1 > 0 && num2 > 0) {
        addAllRangeOf(num1, num2);   
        return result;
    } else {
    return "ERROR";
    }
} else {
    return "ERROR";
};

function addAllRangeOf(number1, number2) {
    if (number1 < number2) {
        for (let index = number1; index <= number2; index++) {
            result += index    
        };    
    } else {
        for (let index = number2; index <= number1; index++) {
            result += index    
        };   
    }    
};






};

// Do not edit below this line
module.exports = sumAll;
