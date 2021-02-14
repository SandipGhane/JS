function printNPrimes(N) {
    for (i = 1; i <= N; i++) {
        if (i == 0 || i == 1) {
            continue;
        }
        let flag = true;
        for (var j = 2; j <= i / 2; j++) {
            if (i % j === 0) {
                flag = false;
                break;
            }
        }
        if (flag === true) {
            console.log(i + " ");
        }
    }
}
printNPrimes(19);