// Input:  arr[] = {1, 2, 3, 4, 5}
// Output: arr[] = {5, 1, 2, 3, 4}

let arr = [1, 2, 3, 4, 5];
function cyclicRotation(arr) {
    let n = arr.length - 1;
    let x = arr[n];
    for (let i = n; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = x;
    console.log(arr);
}
cyclicRotation(arr)