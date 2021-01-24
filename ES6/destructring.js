// let jane = {first : 'sandip',last:'ghane'};

// let sayName=({first,last,middle = "Rangnath"})=>{
//     console.log(`${first} ${middle} ${last}`);
// }

// sayName(jane);

// //array destructring of array for function parameters

// function foo([x,y]){
//     console.log(x,y);
// }

// foo([1,2])

// var persons = [
//     {id : 1, name : "John", tags : "javascript"}, 
//     {id : 2, name : "Alice", tags : "javascript"}, 
//     {id : 3, name : "Roger", tags : "java"},
//     {id : 4, name : "Adam", tags : "javascript"},
//     {id : 5, name : "Alex", tags : "java"}
//   ];

// let tags = persons.filter((tag)=>tag.tags === "javascript");
// console.log(tags);


//find nonDuplicates
let arr = [1, 2, 3, 4.4, 2];

//using filter

function findNonDuplicates (array){
    return array.filter((elem,index)=>{
        return array.indexOf(elem) === index;
    })
}

console.log(findNonDuplicates(arr));