// const firstName = prompt('Enter your First name:');
// const lastName = prompt('Enter your Last name:');

// alert(`Welcome ${firstName} ${lastName}`);




// const userFavMobile = prompt('Your favorite mobile phone model:');
// alert(`Length of string: ${userFavMobile.length}`);




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