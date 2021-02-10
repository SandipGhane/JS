// 1.Array.isArray()
// The Array.isArray() method is used to determine true/false if a value is a true array.
// This method is check to see if the provided value is an instance of Array constructor


console.log(Array.isArray([1, 2, 3])); //logs true

// Note - does not eork on like array of object

console.log(Array.isArray({ length: 3, 0: 1, 1: 2, 2: 3 }));
console.log(typeof { length: 3, 0: 1, 1: 2, 2: 3 });