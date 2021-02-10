// // let jane = {first : 'sandip',last:'ghane'};

// // let sayName=({first,last,middle = "Rangnath"})=>{
// //     console.log(`${first} ${middle} ${last}`);
// // }

// // sayName(jane);

// // //array destructring of array for function parameters

// // function foo([x,y]){
// //     console.log(x,y);
// // }

// // foo([1,2])

// // var persons = [
// //     {id : 1, name : "John", tags : "javascript"}, 
// //     {id : 2, name : "Alice", tags : "javascript"}, 
// //     {id : 3, name : "Roger", tags : "java"},
// //     {id : 4, name : "Adam", tags : "javascript"},
// //     {id : 5, name : "Alex", tags : "java"}
// //   ];

// // let tags = persons.filter((tag)=>tag.tags === "javascript");
// // console.log(tags);


// //find nonDuplicates
// // let arr = [1, 2, 3, 4.4, 2];

// // //using filter

// // function findNonDuplicates (array){
// //     return array.filter((elem,index)=>{
// //         return array.indexOf(elem) === index;
// //     })
// // }

// // console.log(findNonDuplicates(arr));

// // var persons = [
// //     {id : 1, name : "John", tags : "javascript"}, 
// //     {id : 2, name : "Alice", tags : "javascript"}, 
// //     {id : 3, name : "Roger", tags : "java"},
// //     {id : 4, name : "Adam", tags : "javascript"},
// //     {id : 5, name : "Alex", tags : "java"}
// //   ];
  
// //   var uniqueTags = persons.reduce((acc, personObj) => {
// //       console.log('acc',acc);
// //       console.log('personObj',personObj);
// //       acc[personObj.tags] = 1;
// //       return acc;
// //   },{});

// //   console.log(uniqueTags);

// var arr1 = ["apple","orange","apple","orange","pear","orange"];

// function getWordCount(arr){
//     let result = {};
//     for(let i=0;i<arr.length;i++){
//         item = arr[i];
//         result[item] = (result[item] + 1)||1;
//     }
//     return result;
// }
// console.log(getWordCount(arr1));

// const hasNegativeNumber = [1, 2, 3, -4, 5].some((item) => {
// 	return item < 0;
// })

// console.log(hasNegativeNumber);