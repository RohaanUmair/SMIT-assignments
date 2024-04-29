// This function takes a number and rounds it to the nearest integar
function roundNumber(number){
    return Math.round(number);
}

console.log(roundNumber(-2.2));




//  This funtion generates random number within the given range
function generateRandomInRange(min, max){
    let num = Math.round(Math.random() * max);
    while (num < min){
        num = Math.round(Math.random() * max);
    }

    return num
}

console.log(generateRandomInRange(9, 10));




// This function takes a string as an input and converts it into number, and if its not a number it returns NaN
function convertToNumber(str){
    return +str;
}

console.log(convertToNumber('23'));
console.log(convertToNumber('abcd'));




// This function truncates a number to a specified number of decimals
function truncateDecimal(num, decimals){
    let output = (Math.round(num * (10 ** decimals))) / (10 ** decimals);
    return output;
}

console.log(truncateDecimal(22.21234, 2));




// This function formats a number to a string representation with the specified number of decimal places
function formatNumber(num, decimalPlaces){
    if (typeof num === 'NaN' || typeof num !== 'number'){
        return 'Not a valid number';
    }

    if (typeof decimalPlaces === 'NaN' || typeof decimalPlaces !== 'number'){
        return 'Invalid decimal places';
    }

    return num.toFixed(decimalPlaces);
}

console.log(formatNumber(2.123123, 2));
console.log(formatNumber('12a', 2));