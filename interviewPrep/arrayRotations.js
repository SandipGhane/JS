let arr = [1, 2, 3, 4, 5, 6, 7];
let noOfrotations = 2;

function reverseArr(arr, low, high) {
    // let low = 0;
    while (low <= high) {
        let temp = arr[low];
        arr[low] = arr[high];
        arr[high] = temp;
        low++, high--;
    }
}
function rotateArray(arr, d, n) {
    if (d == 0) return -1;
    reverseArr(arr, 0, d - 1);
    reverseArr(arr, d, n);
    reverseArr(arr, 0, n);
    console.log(arr);
}
rotateArray(arr, noOfrotations, arr.length - 1);

