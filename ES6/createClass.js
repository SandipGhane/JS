// class User{
//     constructor(fname,lname){
//         this.first = fname;
//         this.last = lname;
//     }
//     getUserName(){
//         return `${this.first} ${this.last}`;
//     }
// }
// let user = new User('sandip','Ghane');
// console.log(user.getUserName());


// class Person{
//     constructor(name){
//         this.name = name;
//      }
//      hello(){
//         console.log(`Hello ${this.name} you are a person`);
//      }
// }
// class Worker extends Person{
//     constructor(name,job){
//         super(name);
//         this.job = job;
//     }
//     hello(){
//         console.log(`Hello ${this.name} you are a person ${this.job}`);
//     }
// }

// var p1 = new Person('sandip');
// var p2 = new Worker('kiran','dev');
// p1.hello();
// p2.hello();

// for (let i = 0; i < 5; i++) {
//     function fix(i){
//         setTimeout(function() {
//             console.log(i);
//           }, 1000);
//     }
//     fix(i);
//   }

// var func = [];
// for (var i = 0; i < 5; i++) {
//   func[i] = function() {
//     console.log(i);
//   };
// }
// func[3]();

// (function() {
//     var a = b = 5;
//   })();


// var a = 1;
// function b() {
//   a = 10;
//   return;
//   function a() {
//   }
// }
// b();
// console.log(a);

var a = {};
var b = { key: 'b' };
var c = { key: 'c' };

a[b] = 123;
a[c] = 456;
console.log(a[b]);