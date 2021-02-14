let arr = [12, 43, 56, 7, 98, 8];

function secondLargest(arr) {
    let largest = Number.MIN_VALUE;
    let secondLargest;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
console.log(secondLargest(arr));

var a = '42'
var b = Number(a);
console.log(b.toString(2));