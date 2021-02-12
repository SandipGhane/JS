// 1.Array.isArray() - boolean result
// The Array.isArray() method is used to determine true/false if a value is a true array.
// This method is check to see if the provided value is an instance of Array constructor


console.log(Array.isArray([1, 2, 3])); //logs true

// Note - does not eork on like array of object

console.log(Array.isArray({ length: 3, 0: 1, 1: 2, 2: 3 })); //false
console.log(typeof { length: 3, 0: 1, 1: 2, 2: 3 }); //object


// 2. [].some() - boolean result
// This method will start testing values in array until a test return true.
// then the function pass to the some and return immediately true ow return false.
// if the first truthy value found will result in the function immediately returming true and this could mean that not test all values.

var Someresult = [2, 4, 6].some((value) => {
    return value >= 4;
})
console.log('Some-', Someresult); //true

// 3. [].every() - boolean result;
// The [].every() method will start testing values in array until test result return false.
// then the function pass to the every and return immediately false ow return true.
// if function gets falsy value in 1 check then it immediately return false means not test all values in array.

var everyResult = [2, 4, 6, 8, 10].every((value) => {
    return value % 2 !== 0;
})
console.log('Every-', everyResult); //true

// 4. [].filter() - new Array
// This method will return a new array containing all values that pass through filter test.

var filterArray = [1, 2, 3, 4, 5, 6, 7, 8].filter((value) => {
    return value % 2 === 0
})
console.log('Filter -', filterArray); //logs [2,4,6,8]

// 4.forEach()
// This method executes a provided function for each value in array.

var forE = [1, 2, 3, 4, 5].forEach((value) => {
    console.log(value * 2); //logs 2,4,6,8,10
})
// console.log('ForEach -', forE);

// 5. indexOf()
// This method search provided value in whole array and returns index of this first found value.
// if not found returns -1
console.log([1, 2, 3, 4, 5].indexOf(1)); //logs 0

// 6.lastIndexOf()
// The [].lastIndexOf() method searches an array for the last value matching the value passed to [].lastIndexOf(), and returns the index of this value.
console.log([1, 2, 3, 4, 5, 1].lastIndexOf(1)); //logs 5

// 7. map()
// This method executes a provided function for each value in array and return a result in newArray.

var mapArray = [1, 2, 3, 4, 54, 5].map((value) => {
    return value * 2;
})
console.log('Map - ', mapArray);

// 8.Reduce()
// The reduce method runs a function that passes the return value to the next iteration of the function using values in array from left to right and returning final value

// var reduceArrayValue = [1, 2, 3, 4, 5, 6].reduce((returningValueEachItr, value) => {
//     return returningValueEachItr + value;
// })
// console.log('Reduce- ', reduceArrayValue);//logs 21

var reduceArrayValue = [1, 2, 3, 4, 5, 6].reduce((returningValueEachItr, value) => {
    return returningValueEachItr + value;
}, 10)
console.log('Reduce-Passing-default', reduceArrayValue);

// we have also passed default value for the returningValueEachItr


// 9. reduceRight()
// The[].reduceRight() method runs a function that passes the return value to the next iteration of the function using values in the array from right to left and returning a final value.
// add up numbers in array from left to right i.e. (((2+5) +5 ) + 5)
var reduceRightMethod = [5, 5, 5, 2].reduceRight(function (accumulator, value, valueIndex, wholeArray) {
    return accumulator + value;
});
console.log(reduceRightMethod) // logs 17

/** reduce also accepts a second parameter that sets the first accumulator value, 
instead of using the first value in the array. **/

// add up numbers in array from left to right, but start at 10 i.e. ((((10+2) + 5 ) +5 ) + 5)
var reduceRightMethod = [5, 5, 5, 2].reduceRight(function (accumulator, value, valueIndex, wholeArray) {
    return accumulator + value; // first iteration of func accumulator is 10 not 5
}, 10);
console.log(reduceRightMethod) // logs 27


// 10. Array.from()
// Array from Array like values.

console.log('Array from-', Array.from({ length: 2, 0: 1, 1: 2 }));
console.log('Arrat from strings', Array.from('sandip ghane'));
console.log('Array from Array', Array.from([1, 2, 3]));

console.log('Array with updating values', Array.from([1, 2, 3], i => i * i));


// New Array methods

// 1 [].findindex();
// find index of the target element and returns
console.log('indexOf', [1, 2, 3, 45, 5].indexOf(45)); // logs - 3
// console.log('indexOf with condition', [1, 2, 3, 4, 5].indexOf((item) => { return item >= 4 }))

// 2 [].find()
// find and returns the first value of the given array that passed through given condition
console.log('find method', [1, 2, 3, 4, 5, 6].find(item => item > 2)); //logs 3

// 3. [].includes - boolean result return
// find target element in array and returns T/F result
console.log('includes -', [1, 2, 6, 8, 45].includes(45)); // logs true

// 4 - [].keys() returns keys of the array in Array iterator object
console.log('Keys', [2, 3, 4, 5, 6].keys()); //logs [Array Iterator] {}
var arr = [1, 2, 6];
var itr = arr.keys();
// console.log('itr1', itr.next());
// console.log('itr2', itr.next());
// console.log('itr3', itr.next());
// console.log('itr4', itr.next());

// 5 - [].values() returns a values of the array in array iterator object;
console.log('vlaues', [1, 2, 3, 4, 5].values()); //logs [Array Iterator] {}
// 6- [].entries() returns a values of the array in key-values iterator object manner
console.log('entries', [1, 2, 3, 4].entries()); // logs [Array Iterator] {}

// 7- [].fill()
// fill array of 1 values , array size is given by 1st argument .
console.log('fill', Array(2).fill(1));// logs [1,1]
console.log([5, 5, 5, 5].fill('foo', 2)) // logs [5, 5, "foo", "foo"]
