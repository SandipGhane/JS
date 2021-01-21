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
