//JSON.parse() takes a JSON string and returns the js value describe by the string.
//Other word JSON.parse() convert a string of js in JSON format into js values(Objects,string ,array,etc);

// var JSONValues = JSON.parse([1,2,3,4]);
// console.log(typeof JSONValues);

var jsonString = JSON.stringify({ name: 'Bill', age: 2 });
console.log(typeof jsonString) 
console.log(jsonString);