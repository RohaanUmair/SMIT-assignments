const firstName = prompt('Enter your First name:');
const lastName = prompt('Enter your Last name:');

alert(`Welcome ${firstName} ${lastName}`);




const userFavMobile = prompt('Your favorite mobile phone model:');
alert(`Length of string: ${userFavMobile.length}`);




const str = 'Pakistani';
for (let i = 0; i < str.length; i++){
    if (str[i] === 'n'){
        alert(`Index of 'n': ${i}`);
        break;
    }
}




const string = 'Hello World';
for (i = string.length - 1; i >= 0; i--){
    if (string[i] === 'l'){
        alert(`Last index of 'l': ${i}`);
        break;
    }
}




var string2 = 'Pakistani';
alert(`Character at index 3: ${string2.charAt(3)}`);




const firstName = prompt('Enter your First name:');
const lastName = prompt('Enter your Last name:');

alert('Welcome '.concat(firstName).concat(' ' + lastName));




let city = 'Hyderabad';
let replaced = city.replace('Hyder', 'Islam');

alert(replaced);




let message = 'Ali and Sami are bestfriends. They play cricket and football together.';
let editedMessage = message.replaceAll('and', '&');

alert(editedMessage);




// Converts string '472' into number
let numString = '472';
alert(numString + ' type: ' + typeof numString);

let numConverted = parseInt(numString);
alert(numConverted + ' type: ' + typeof numConverted);




// Convert into upper case
let userInput = prompt('Any word:');
console.log(userInput.toUpperCase());




let userInput2 = prompt('Enter any word to convert into title case:');
console.log(userInput2.charAt(0).toUpperCase() + userInput2.slice(1).toLowerCase());




// Convert number into string and removing decimal point
var num = 35.36;
let numStr = num.toString().replace('.', '');
console.log(numStr);




let username = prompt('Username:');
const notAllow = ['@', ',', '.', '!'];

for (let i = 0; i < notAllow.length; i++){
    for (let j = 0; j < username.length; j++){
        if (username[j] === notAllow[i]){
            prompt('Enter valid username:');
        }
    }
}




// Case insensitive search by user
let A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
let userWant = prompt('What do you want to order?');
let countIndex = 0;

let itemFound = false;
for (let i = 0; i < A.length; i++){
    if (A[i] === userWant.toLowerCase()){
        itemFound = true;
        break;
    }
    countIndex++;
}

if (itemFound){
    alert(`${userWant.toLowerCase()} is available at index ${countIndex}.`);
} else {
    alert(`${userWant.toLowerCase()} is not available.`);
}




// This programs takes password from user and check if it contains combination of numbers and alphabets and should be a minimum of 6 characters while first character shouldn't be a number
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




// Program which displays the last character in of a user input
let userString = prompt('Enter anything:');
alert(userString.charAt(userString.length - 1));




// This programs counts the number of word "the" present in the sentence
const sentence = 'The quick brown fox jumps over the lazy dog';
let theCount = 0;

for (let i = 0; i < sentence.length; i++){
    if (sentence.toLowerCase().slice(i, i + 5) === ' the '){
        theCount++;
    }
}
console.log(`Word 'the' is occured ${theCount} times in the sentence.`);