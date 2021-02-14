//

const nums = [2, 2, 1, 1, 1, 2, 2, 1, 2, 1];
const x = nums => {
    const final = nums.length / 2;
    for (num of nums) {
        let count = 0;
        for (elem of nums) {
            if (elem == num) {
                count = count + 1;
            }
        }
        if (count > final) {
            return num;
        }
    }
    return -1;

}
console.log(x(nums));

// const logSome = () => {
//     let x = [1, 2, 3, 4, 5, 6, 7, 8];
//     let i;
//     for (i = 2; i < 6; i++) {
//         x[x[i]] = x[i];
//     }
//     for (i = 0; i < 8; i++) {
//         console.log(x[i]);
//     }
// }
// logSome();

// // let i = 0;
// // let j = 2;
// // do {
// //     i++;
// //     j++;
// //     console.log('Hello');
// // } while (j < 5);

// const p = () => {

// }