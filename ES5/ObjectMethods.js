//Object.create()

var Objects = {
    name : 'SandipGhane',
    getFoo : function() {
        console.log(this.name);
    }
}

// create a new object ,setting the prototype to a newly created newObj object below
var newObj = Object.create(Objects);
newObj.getFoo();

console.log(Object.getPrototypeOf(newObj)===Objects);