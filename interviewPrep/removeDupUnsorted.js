/*
    Input : arr[] = { 1, 2, 5, 1, 7, 2, 4, 2}
    Output : 1 2 5 7 4
    Explanation : {1, 2} appear more than one time.
*/

let map = {};

function remove(arr) {
    let j = 0;
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            continue;
        } else {
            map[arr[i]] = true;
            arr1[j++] = arr[i];
        }
    }
    console.log(map);
    console.log(arr1);
}
let arrray = [1, 2, 5, 1, 7, 2, 4, 2];
remove(arrray);