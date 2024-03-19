let arr = [[], [], []];

let arr2 = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
for (let i = 0; i < arr2.length; i++){
    console.log(arr2[i]);
}





for (let i = 1; i <= 10; i++){
    console.log(i);
}





let tableOf = prompt('Enter a number to show its multiplication table');
let length = prompt('Enter length of multiplication table');

for (let i = 1; i <= length; i++){
    console.log(`${tableOf} x ${i} = ${tableOf * i}`);
}






let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
for (let i = 0; i < fruits.length; i++){
    console.log(`Element at index ${i} is ${fruits[i]}`);    
}






//counting
console.log('counting:');
for (let i = 1; i <= 15; i++){
    console.log(i);
}

//reverse counting
console.log('reverese counting:');
for (let i = 10; i > 0; i--){
    console.log(i);
}

//even numbers
console.log('even numbers:');
for (let i = 0; i <= 20; i += 2){
    console.log(i);
}

//odd numbers
console.log('odd numbers:');
for (let i = 1; i <= 19; i += 2){
    console.log(i);
}

//series
console.log('series:');
for (let i = 2; i <= 20; i += 2){
    console.log(`${i}k`);
}






let A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
const userInput = prompt('What do you want to order?');
let found = false;

for (let i = 0; i < A.length; i++){
    if (A[i] == userInput){
        console.log(`${userInput} is available at index ${i} in our bakery`);
        found = true;
        break
    }
}
if (!found){
    console.log(`We are sorry. ${userInput} is not available in our bakery.`);
}






//find largest number in an array
let num = [24, 53, 78, 91, 12];

console.log(`Array items: ${num}`);
let sortedArray = num.slice(0);
sortedArray.sort();
console.log(`The largest number is ${sortedArray[sortedArray.length - 1]}`);






//find smallest number in an array
num = [24, 53, 78, 91, 12];

console.log(`Array items: ${num}`);
let sortedArray2 = num.slice(0);
sortedArray2.sort();
console.log(`The smallest number is ${sortedArray2[0]}`);







//multiples of 5
for (let i = 5; i <= 100; i += 5){
        console.log(i);
}