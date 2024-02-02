/*
ICE 3 Part 1
Yashvi Patel
January 30 2024
 */

// Array literal 
let myArray = [1,2,3,4,5];

// creating an array using constructor
let myArrayConstructor = new Array();
console.log(`empty array: ${myArrayConstructor}`);
myArrayConstructor.push(24);
console.log(`Non empty array: ${myArrayConstructor}`);

// creating  array with constructor
let myConstructorArray = new Array(10, 20, 30, 40, 50);
console.log(`Value array: ${myConstructorArray}`);
console.log('Value array object:' ,myConstructorArray);

// create array with constructor
let array2 = new Array(10);
console.log(`new Array: ${array2}`);
// add push to array
array2.push(80);
console.log(`new Array: ${array2}`);

// tuesday

let tuesdayArray = new Array(10).fill("Tuesday!");
console.log(`class is on ${tuesdayArray}`);

function square(x){
    return x*x;
}

let nums = new Array(1,33,22,5);
let squareNums = nums.map(function(value){
    return square(value)
})
console.log(`Squared value: ${squaredNums}`);

//todo:
// let squareNums = nums.map(function(value){
//     return square(value)
// })
// rewrite this using arrow functions.
