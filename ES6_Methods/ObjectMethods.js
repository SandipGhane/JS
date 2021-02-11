// //1. Object.create()

// //setup an object to be used as the prototype to a newly created myObject object below

// var aPrototype = {
//     foo: 'bar',
//     getFoo: function () {
//         console.log(this.foo);
//     }
// }
// var myObject = Object.create(aPrototype);
// //create (myObject) new object and easily setting up prototypes of the aPrototype object
// myObject.getFoo();

// // console.log(Object.getPrototypeOf(myObject) === aPrototype);


// // 2. Object.getOwnPropertyDescriptor(arg1='targetObj',arg2='key');

// var obj = {
//     prop1: 'value1'
// }
// //get default descriptors for the prop1 property in obj
// // console.log('getOwnPropertyDescriptor', Object.getOwnPropertyDescriptor(obj, 'prop1'));

// /*
//     logs
//     {
//         value: 'value1',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// */

// //3. Object.defineProperty()
// // add a property 'value2' with discriptor to obj using this method

// Object.defineProperty(obj, 'prop2', {
//     value: 'value2',
//     writable: true,
//     enumerable: false,
//     configurable: false,
// })
// // console.log('Object', obj);
// //logs Object { prop1: 'value1', prop2: 'value2' }


// /*
//     value : contains the property's value;
//     writable: contains a boolean indicating wheather the value of a property can be changes pr written too
//             The ability for u to change the value of a property is controlled by writable.
//             if u use strict mode then compiler gets an TypeError
//     get : reference to the function that is called when a property is read.
//     set : reference to the function that is called when a property is set to a value.
//     configurable : contains a boolean indicating wheather a property can have its attributes changed and deleted.
//                     if set configurable false then u cant redefine project attribute descriptor properties.
//     enumerable : contains a boolean indicating if a property will show up on certain operations.
// */
// // obj.prop2 = 'kiran';
// // obj.prop2 = 'sandip';
// // delete obj.prop2;
// // console.log('Object', obj);

// // Object.defineProperty(obj, 'prop2', {
// //     value: 'value2',
// //     writable: false,
// //     enumerable: false,
// //     configurable: false,
// // })

// // console.log('configurable false', Object.getOwnPropertyDescriptor(obj, 'prop1'));


// //Object.keys return an array with non-inherited-enumerable object properties.(enumerable : true)
// console.log('Object keys', Object.keys(obj));

// //Object.getOwnPropertyNames() - returns array with all object properties;
// console.log('Object.getOwnPropertyNames()', Object.getOwnPropertyNames(obj));

// //Object.preventExtensions()
// //stops properties from being added but not deleted;
// console.log('before prevent', obj);
// Object.preventExtensions(obj);
// delete obj.prop1;
// console.log('after prevent', obj);



var objSeal = {
    val: "Sandip"
}
objSeal.val2 = "ghane";
objSeal.val3 = "xyz";
Object.seal(objSeal);
//cant change object property discriptors ,and cant delete,property value will change but not added new properties in seal object
// seal() makes configurable = false;
console.log(Object.getOwnPropertyDescriptor(objSeal, 'val'));
// delete (objSeal.val)
// Object.defineProperty(objSeal, 'val', {
//     value: 'value2',
//     writable: true,
//     enumerable: true,
//     configurable: true,
// })
objSeal.val = 'hdush';
console.log('Object Seal', objSeal);


// Object.Freeze()
// Stops properties from being added, configured, or writable (i.e. the configurable and writable descriptor attribute for each property is changed to false)
//no change even property value
Object.freeze(objSeal)
objSeal.val = 'make change';
console.log('Object Freeze', objSeal);


// Object.isExtensible(): Boolean check if an object is extensible.
// Object.isSealed(): Boolean checking if an object is sealed.
// Object.isFrozen(): Boolean checking if an object is frozen.
