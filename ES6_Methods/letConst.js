// const variables can't reassign
//  Reassigning a const value throws an error. Additionally, both const and let honor all block scope (i.e. { block scope }), 
// unlike var which only honors function block scope (i.e. function myFunction(){ block scoped }).

(function () {
    var doug = 45;
    console.log(a);
    var MATH_CONSTANT = Math.PI
}());
var a = 'o';
try {
    console.log(doug);
    console.log(MATH_CONSTANT);
} catch (e) {
    console.log('Can\'t find doug or MATH_CONSTANT');
}



// Spread Operator
// ...this operator is used to expand array elements,Properties from object ,indivisual characters from string
console.log('spread ', ...['f', 'o', 'o']);
console.log([...[1, 2], ...[3, 4, 5]]);
console.log({ ...{ one: 1, two: 2 }, ...{ three: 3, four: 4 } });
console.log([...'foo']);

// rest operator
// wrapping things up

/*
By place the ... operator directly in front of the last function parameter the rest
of the arguments passed to a function besides the ones before the rest parameter
are wrapped up into an array.
*/

function c(p1, p2, ...p3) {
    console.log('p3', p3);
}
c(1, 2, 3, 4, 5, 6)

const [k, b, ...p] = "doggy";
console.log('c', p);

