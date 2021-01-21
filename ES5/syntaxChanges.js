// 1. Trailing commas in Object literals
var myObj = {
    name:"Sandip",
    age:22,//no syntax error here
}

//no syntax error when using reserved keywords as propert/key on an object
var obj = {
    new : 'new',
    class : 'class',
    if:'if',
    function:'function'
}
console.log(obj);



//Array.from
// this method will take Array-like values (Objects with the length property and index values)
// or iterable values and convert them into array values.
//iterable values(String , array , TypedArray , Map and Set).

const myArray = Array.from({length:2,0:'zero',1:'one'});
console.log(myArray);

//iterable values
const array = Array.from("sandip ghane");
console.log(array);

const array2 = Array.from([1,2,3],item => item*item);
console.log(array2);