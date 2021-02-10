var myString = "        My name is sandip           ";
console.log(myString.length); // 36
var myNewString = myString.trim();
console.log(myNewString.length); //17


//Note - this method does not mutate a value it creates a new string
console.log(myString, myString.length);
//         My name is sandip         // 37