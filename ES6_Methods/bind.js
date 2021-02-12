name = "sandip Ghane";//define global scope (window)
// console.log(name);
var object = {
    name: "Kiran Ghane",
}
greeting = function () {
    // if the greeting function has a defined this that is not window.(i.e - global)
    console.log((this != undefined && this !== window) ? this.name : window.name);
}

// invoke greeting , where the this for the greeting function is the global scope. 
greeting();
// logs Sandip Ghane because the value of the name is in the global scope.



//.bind() methods greeting function this value to object.
bindGreeting = greeting.bind(object);
bindGreeting(); //logs Kiran Ghane (this points to the object not window(global scope))
