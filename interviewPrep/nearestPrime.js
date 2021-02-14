function isPrime(num) {
    // let flag = true;
    if (num == 2) return true;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
function beforePrime(num) {
    let count = 0;
    while (true || num == 1) {
        if (isPrime(num)) {
            return [num, count];
        } else {
            num = num - 1
            count = count + 1;
        }
    }
}
function afterPrime(num) {
    let count = 0;
    while (true || num == 1) {
        if (isPrime(num)) {
            return [num, count];
        } else {
            num = num + 1;
            count++;
        }
    }

}
function findNearestPrime(Inputnumber) {
    if (Inputnumber === 0 || Inputnumber == 1) return -1;
    let bp = beforePrime(Inputnumber - 1);
    let ap = afterPrime(Inputnumber + 1);
    bp[1] === ap[1] ? console.log(`Nearest Primes: ${bp[0]} and ${ap[0]}`) : bp[1] > ap[1] ? console.log(`Nearest Prime: ${ap[0]}`) : console.log(`Nearest Prime: ${bp[0]}`);
}

findNearestPrime(12);