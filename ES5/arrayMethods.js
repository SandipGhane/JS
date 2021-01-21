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

