
function isPrime(number) {
    if (number == 2 || number == 3) {
        return true;
    }
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

function findNthPrime(n) {
    console.log('hel');
    let count = 0;
    let prime = {};
    for (let candidate = 2; count < n; candidate++) {
        if (isPrime(candidate)) {
            count++;
            prime[count] = candidate;
        }
    }
    return prime[n];
}
console.log(findNthPrime(10));