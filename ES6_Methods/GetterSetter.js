// ES5 adds to Objects computed properties via the keywords get and set.
// This means that Objects can have properties, that are methods, but don't act like methods (i.e you don't invoke them using ()). 
// In short by labeling a function in an object with get or set one can invoke the backing property function on a property, 
// by merely accessing the property, without using innovating brackets.


var myObject = {
    name: 'Sandip ghane',
    get getName() {
        return this.name;
    },
    set setName(changeName) {
        this.name = changeName;
    }
}
console.log(myObject.getName);
myObject.setName = 'Joes';
console.log(myObject.getName);