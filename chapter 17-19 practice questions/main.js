//loop to calculate factorial of 5
let factorial = 1;
for (let i = 1; i <= 5; i++){
    factorial *= i;
}
console.log(factorial);




//table of 7
for (let i = 1; i <= 10; i++){
    console.log(`7 x ${i} = ${i * 7}`);
}




//square of numbers from 1 to 10
for (let i = 1; i <= 10; i++){
    console.log(i ** 2);
}




//find smalleset number in an array
let arr = [3, 7, 2, 9, 5];
let smallestNumber = Infinity;

for (let i = 0; i < arr.length; i++){
    if (arr[i] < smallestNumber){
        smallestNumber = arr[i]
    }   
}
console.log(smallestNumber);




//reverse of string (hello)
let str = 'hello';
let reversedStr = '';

for (let i = str.length - 1; i >= 0; i--){
    reversedStr += str[i]
}
console.log(reversedStr);




//printing sum of digits of a number
let num = 123;
let sum = 0;
let numString = num.toString();

for (let i = 0; i < numString.length; i++){
    sum += parseInt(numString[i]);
}
console.log(sum);