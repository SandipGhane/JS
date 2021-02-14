let arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
function remove(arr) {
    if (arr.length == 0 || arr.length == 1) {
        return arr.length;
    }
    let j = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] != arr[i + 1]) {
            arr[j++] = arr[i];
        }
    }
    arr[j++] = arr[arr.length - 1];
    // console.log(arr);
    return j;
}
let j = remove(arr);
for (let i = 0; i < j; i++) {
    console.log(arr[i]);
}