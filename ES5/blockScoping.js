// if(true){
//     var a= 7;
// }

// (function(){
//     var doug = 45;
//     var MATH = 3.14;
// }());
// try{
//     console.log(doug);
//     console.log(MATH);
//     console.log(a);
// }catch(e){
//     console.log('error');
// }

// // // if(t)

// // let [a,b,c] = "foo";
// // console.log(a);
// // console.log(b);

// // let {first:f,last:l} = {first:"sandip",last:"ghane"};
// // console.log(f);

// //spread operator
// //The spread operator is used expand elements from an array , properties from an Objects
// //individuals characters from string


// // console.log([...['f','o','o']]);
// // console.log([...[1,2,3],...[4,5]]);
// // const obj1 = {first :"sandip",lname:"ghane"};
// // const obj2 = {f:"kiran",l:"ghane"};
// // console.log({...obj1,...obj2});

// // console.log([..."foo"]);

// //Rest operator
// // The rest operator looks exactly like the spread operator but instead of expanding things it will wrap things up


// // function c(p1,p2,...p3){
// //     console.log(p1,p2,p3);
// // }
// // c(1,2,3,4,5,6,7);

// //destructing string characters
// // const [a,b,c,...d] = "doggy";
// // console.log(d);


// // const func = function(x){return x*x};

// var counterBroken = function(){
//     this.num = 0;
//     this.timer = setTimeout(function(){
//         this.num++;
//         console.log(this.num);
//     },1000)
// }
// var inst = new counterBroken();

// var couterSuccess = function(){
//     this.num = 0;
//     var that = this;
//     this.timer = setTimeout(function(){
//         that.num++;
//         console.log(that.num);
//     },1000)
// }

// var inst2 = new couterSuccess();


// using array function get this instance bydefault

// var counter = function(){
//     this.num = 0;
//     this.timer = setTimeout(()=>{
//         this.num++;
//         console.log(this.num);
//     },1000)
// }

// var c = new counter();

// const func1 = ((x,) => { // no error
//     console.log(x)
// })('cat');

// const func2 = ((y)=>{
//     console.log(y);
// })('san');

// const f = ((z)=>{
//     console.log(z);
// })('p');

// using shorthand properties names
// const myNumber = 1;
// const obj = {
//     myNumber
// }
// console.log(obj);


// const myMap = new Map([
//     ['k1','sandip'],
//     ['k2','ghane']
// ]);

// myMap.forEach((v,k)=>{
//     console.log(k+":"+v);
// })

function Human(f,l){
    this.first = f;
    this.last =l;
}

Human.prototype.fullName = function(){
    return `${this.first} ${this.last}`;
};

function Developer(first ,last ,type){
    Human.call(this,first,last);
    this.type = type;
}
Developer.prototype = Object.create(Human.prototype);