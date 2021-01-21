// //Object.create()

// var Objects = {
//     name : 'SandipGhane',
//     getFoo : function() {
//         console.log(this.name);
//     }
// }

// // create a new object ,setting the prototype to a newly created newObj object below
// var newObj = Object.create(Objects);
// newObj.getFoo();

// console.log(Object.getPrototypeOf(newObj)===Objects);

// const myObject = {
//     prop1 : "value1"
// }
// // console.log(Object.getOwnPropertyDescriptor(myObject,'prop1'));

// Object.defineProperty(myObject,'key2',{
//     value:'SandipGhane',
//     writable:false,
//     enumerable:true,
//     configurable:true
// });
// console.log(myObject);
// myObject.key2 = 'boss';
// console.log(myObject);


// Object.defineProperties(myObject,{
//     key3:{
//         enumerable:true,
//         configurable:true,
//         value:"bosss"
//     },
//     key4:{
//         enumerable:true,
//         configurable:true,
//         set:(newValue)=>{
//             console.log('new value here',newValue);
//         },
//         get:()=>{
//             console.log('In key4');
//             return 'key4';
//         }
//     }
// });
// myObject.key4 = "sandy";
// console.log(myObject.key4);

// var newObj = Object.create(null);
// newObj.key1 = "sandip ghane";
// console.log(Object.getOwnPropertyDescriptor(newObj,'key1'));

// Object.defineProperty(newObj,'key2',{
//     enumerable:false,
//     value:'ghane'
// });

// //Object.keys() returns an array of non-inherited-enumerable properties if a given
// // given object.
// //and getOwnPropertyNames() which returns an array of non-inherited properties 
// //of a given object regardless of enumerability.
// console.log(Object.keys(newObj));
// console.log(Object.getOwnPropertyNames(newObj));


// 
// window.name = 'John'; // Defined in the global scope
// var myObj = {
//     name:'Ghane'
// };
// var greeting = function(){
//     // if the greeting function has a defined this that is not window i.e. global scope
//     console.log(this !== undefined && this !== window ?  this.name : window.name);
// };
// greeting();

//bind() method returns a new function , when invoked ,has its this sets to specific value.

let person = {
    name:'Sandip Ghane',
    getName : function(){
        console.log(this.name);
    }
};

setTimeout(person.getName.bind(person),1000);

// //Using bind() to borrow methods from different objects.

var myObj = {
    name:'sandip'
};
var greeting = function(){
    console.log(this.name);
}
var bindGreeting = greeting.bind(myObj);
bindGreeting();
console.log(myObj);

//Using bind to borrow methods from different objects.

let runner = {
    name:'Runner',
    run:function(speed){
        console.log(this.name + ' runs at ' + speed + ' mph.  In run');
    }
}
let flyer = {
    name:'Flyer',
    fly:function(speed){
        console.log(this.name + ' flies at ' + speed + ' mph In fly');
    }
}

let run = runner.run.bind(flyer,39);
run();

let fly = flyer.fly.bind(runner,49);
fly();