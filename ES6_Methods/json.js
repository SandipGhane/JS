// JSON.parse() - Json.parse convert string of javascript in JSON format to real javascript values.

// console.log(JSON.parse('{name:'sa}'));

var str = '{"name":"sandip"}';
console.log('typeOf', typeof str);

var b = JSON.parse(str);
console.log('parse', typeof b);

//JSON.stringify() - takes javascript values and returns a string representing value

var obj = { name: 'sandip ghane' };
console.log('stringify', typeof JSON.stringify(obj));