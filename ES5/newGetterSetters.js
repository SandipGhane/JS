/*
    ES5 adds to Objects computed properties via th ekeywords get and set.
    This means Objects can have properties, that are methods,but dont acts like methods.
    you dont invoke them using ().
    
    Labeling a functions in an object with get nad set one can invoke the backing property function on a property,
    by merely accessing the property, withou tusing invoking brackets.
    
*/

var obj = {
    get RunWhenAccessed(){
        console.log("using get keyword accessed function");
    },
    set RunsWhenSets(newValue){
        console.log("new passed value to the set function",newValue);
    },
    a: function acc(){
        console.log("using invoking functions");
        return 1;
    }
}
obj.RunWhenAccessed;
// obj.a;
obj.RunsWhenSets = 'Sandy';
console.log(obj.a());


var person = {
    firstName : '',
    lastName : '',
    get name(){
        return this.firstName+ " "+this.lastName;
    },
    set name(str){
        var n = str.split(" ");
        this.firstName = n.shift();
        this.lastName = n.join();
        console.log(this.lastName);
    }
}
person.name = 'Sandip Ghane';
console.log(person.name);