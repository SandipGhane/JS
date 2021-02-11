
// Create an object
var myObject = Object.create(null); // no prototype used

// Add prop to object created
myObject.myObjectProp1 = 1;

// Define a property using defineProperty()
Object.defineProperty(myObject, 'myObjectProp2', {
    enumerable: false,
    value: 2
});

// Use keys() to get Array of all non-inherited, enumerable properties
console.log(Object.keys(myObject)); // logs ["myObjectProp1"]

// Use getOwnPropertyNames to get Array of all non-inherited properties including non-enumerable
console.log(Object.getOwnPropertyNames(myObject)); // logs ["myObjectProp1", "myObjectProp2"]
