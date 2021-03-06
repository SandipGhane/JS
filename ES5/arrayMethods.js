/*
some
every
filter
forEach
indexOf
lastIndexOf
map
reduce
reduceRigth
*/

//check if one or more items in the array is greater or equal to 2.
// var someMethod = [1,2,3].some((value,valueIndex,wholeArray)=>{
//     return value>=2;
// })
// //function returns true
// var everyMethod = [1,2,3,4].every((value)=>{
//     value>=0
// })
console.log([1,2,3,4].some((value)=>{
    return value>1
}));

// The some method will start testing values in array ,until a test return true , then the function passed to .some() returns true ,ow the function returns falase.

console.log([1,2,3,4,5].every((value)=>{
    return value>=1;
}));
//Check every items in array are bigger than 1 then every function returns true.
// every function check every item in array with given conditions.and then returns true  or false.


//filter 
// The filter() ,method will return a new array containing all the values that pass the filtering test.
var myArray = [1,2,3,4,5,6,7,8,9];
var filterArray = myArray.filter((value)=>{
    return value>=6;
})
console.log(filterArray);

//filter returns new array old array still as it is.

//[].forEach()
// forEach method executes a provided function for each value in the array.

function forEachDemo(){
    var myArray = ["dog",2,3,"cat",5,6];
    myArray.forEach((value,i)=>{
        console.log(i,"=>",value);
    })
    console.log(myArray);
    if(true){
        let a=10;
        console.log(a); 
    }
    const a=5;
    console.log(a);
}
forEachDemo();

console.log(myArray);

//indexOf
// thos method searches an array for the first value matching the value passed to indexOf and return
// index of the given value.
//if given values not found in the given array then indexOf returns -1;

console.log(myArray.indexOf('cat'));

//lastIndexOf
// this method searches an array of the last value matching the value passed to the 
// lastIndexOf . and returns index of the value.

//map
// The map method executes a provided function for each value in the array,
// and returns the results in a new array

var newMappingArray = myArray.map((value)=>{
    return value+99;
})
console.log(newMappingArray);
console.log(myArray);

//reduce
//The reduce method runs a function that passes the return value to the next iteration
//of the function using values of the array from left to right and returning final value.
var resultValue = myArray.reduce((prev,next)=>{
    console.log("Prev=>",prev,"Next=>",next);
    return prev + next;
},10)
console.log("result",resultValue);

//reduceRight
//This method runs a functionthat passes the return value to the next iteration of the
//function using values in the array from right to left and returning final value

