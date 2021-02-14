// 1.Brute Search Approach
// timeComplexity - O(n^2)


// var str = 'sandipghane';
// function reverseString(str) {
//     var reverseStr = '';
//     for (var i = str.length - 1; i >= 0; i--) {
//         reverseStr = reverseStr + str[i];
//     }
//     return reverseStr;
// }

// console.log(reverseString(str));

// 2. Optimul solutions

var str = 'sandipghane';
function reverser(str) {
    let high = str.length - 1;
    let low = 0;
    str = str.split('');
    while (low <= high) {
        var temp = str[low];
        str[low] = str[high];
        str[high] = temp;
        low++, high--;
    }
    return str.join('');
}
console.log(reverser(str));