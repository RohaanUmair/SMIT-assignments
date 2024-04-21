// This program doubles all the even numbers, remove all the odd numbers and returns the modified array
let array = [5, 12, 61, 22, 11, 17, 20];
let newArray = [];

for (let i = 0; i < array.length; i++){
    if (array[i] % 2 === 0){
        newArray.push(array[i] * 2);
    }
}

array = newArray;
console.log(array);




// This programs takes password from user and check if it contains both numbers and alphabets and should be a minimum of 6 characters while first character shouldn't be a number
const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

let userPassword = prompt('Enter your password:');


let alphabetPresent = false;
let numPresent = false;

if (nums.includes(userPassword.charAt(0)) || userPassword.length < 6){
    prompt('Password should not begin with a number and should be of minimum 6 characters:');
} else {
    for (let i = 0; i < userPassword.length; i++){
        if (alphabets.includes(userPassword.charAt(i))){
            alphabetPresent = true;
        } else if (nums.includes(userPassword.charAt(i))){
            numPresent = true;
        }

        // Break the loop if both aphabet and number are present
        if (alphabetPresent && numPresent){
            break;
        }
    }
}

if (!numPresent || !alphabetPresent){
    prompt('Enter a valid password:');
}




// This program checks if a number is present in both arrays and make a new array of such elements
const arr1 = [321, 243, 54, 576, 687, 123, 342];
const arr2 = [432, 45, 321, 231, 243, 45, 12, 54];
let arr3 = [];

for (let i = 0; i < arr1.length; i++){
    for (let j = 0; j < arr2.length; j++){
        if (arr1[i] === arr2[j]){
            arr3.push(arr1[i]);
        }
    }
}
console.log(arr3);




// This program takes a number as an input and tells whether it is prime or not
let num = prompt('Enter a number to check its prime or not:');

let isPrime = true;

if (num <= 1){
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            isPrime = false;
            break;
        }
    }
}
if (isPrime){
    alert('The number is prime.')
} else {
    alert('The number is not prime.')
}




// This programs takes a nested array and make it into a single array
let nestedArray = [[1, 2], [3, 4], [5, 6]];
let singleArray = [];

for (let i = 0; i < nestedArray.length; i++){
    for (let j = 0; j < nestedArray[i].length; j++){
        singleArray.push(nestedArray[i][j]);
    }
}
console.log(singleArray);