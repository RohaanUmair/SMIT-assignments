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