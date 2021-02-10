// 1.Array.isArray() - boolean result
// The Array.isArray() method is used to determine true/false if a value is a true array.
// This method is check to see if the provided value is an instance of Array constructor


console.log(Array.isArray([1, 2, 3])); //logs true

// Note - does not eork on like array of object

console.log(Array.isArray({ length: 3, 0: 1, 1: 2, 2: 3 }));
console.log(typeof { length: 3, 0: 1, 1: 2, 2: 3 });


// 2. [].some() - boolean result
// This method will start testing values in array until a test return true.
// then the function pass to the some and return immediately true ow return false.
// if the first truthy value found will result in the function immediately returming true and this could mean that not test all values.

var Someresult = [2, 4, 6].some((value) => {
    return value >= 4;
})
console.log('Some-', Someresult);

// 3. [].every() - boolean result;
// The [].every() method will start testing values in array until test result return false.
// then the function pass to the every and return immediately false ow return true.
// if function gets falsy value in 1 check then it immediately return false means not test all values in array.

var everyResult = [2, 4, 6, 8, 10].every((value) => {
    return value % 2 !== 0;
})
console.log('Every-', everyResult);

// 4. [].filter() - new Array
// This method will return a new array containing all values that pass through filter test.

var filterArray = [1, 2, 3, 4, 5, 6, 7, 8].filter((value) => {
    return value % 2 === 0
})
console.log('Filter -', filterArray);

// 4.forEach()
// This method executes a provided function for each value in array.

var forE = [1, 2, 3, 4, 5].forEach((value) => {
    console.log(value * 2);
})
// console.log('ForEach -', forE);

// 5. indexOf()
// This method search provided value in whole array and returns index of this first found value.
// if not found returns -1
console.log([1, 2, 3, 4, 5].indexOf(1));