//1. Object.create()

//setup an object to be used as the prototype to a newly created myObject object below

var aPrototype = {
    foo: 'bar',
    getFoo: function () {
        console.log(this.foo);
    }
}
var myObject = Object.create(aPrototype);
//create (myObject) new object and easily setting up prototypes of the aPrototype object
myObject.getFoo();

console.log(Object.getPrototypeOf(myObject) === aPrototype);


// 2. Object.getOwnPropertyDescriptor(arg1='targetObj',arg2='key');

var obj = {
    prop1: 'value1'
}
//get default descriptors for the prop1 property in obj
console.log('getOwnPropertyDescriptor', Object.getOwnPropertyDescriptor(obj, 'prop1'));

/*
    logs
    {
        value: 'value1',
        writable: true,
        enumerable: true,
        configurable: true
    }
*/

//3. Object.defineProperty()
// add a property 'value2' with discriptor to obj using this method

Object.defineProperty(obj, 'prop2', {
    value: 'value2',
    writable: true,
    enumerable: true,
    configurable: false,
})
console.log('Object', obj);
//logs Object { prop1: 'value1', prop2: 'value2' }


/*
    value : contains the property's value;
    writable: contains a boolean indicating wheather the value of a property can be changes pr written too
    get : reference to the function that is called when a property is read.
    set : reference to the function that is called when a property is set to a value.
    configurable : contains a boolean indicating wheather a property can have its attributes changed and deleted.
    enumerable : contains a boolean indicating if a property will show up on certain operations.
*/
obj.prop2 = 'kiran';
delete prop2;
obj.prop3 = 'sandip';
console.log('Object', obj);
