/*
    findIndex()
    find()
    includes()
    keys()
    values()
    entries()
    copyWithin()
    fill()
    flat()
    flatMap()
*/
// find
//find and return the first value in the array that is greater than 20;
const my = [10,20,30,40,50];
console.log(my.find((i)=>{
    return i > 20;
}));
