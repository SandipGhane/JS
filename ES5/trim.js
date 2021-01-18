var myString = "    my name is sandip       ";
console.log("Lenght",myString.length);
var newString = myString.trim();
console.log("String here",newString,newString.length);

//isArary method

console.log('isArray',Array.isArray([1,2,3]));
console.log('isArray using object arrays',Array.isArray({len:[1,2,3,4]}));