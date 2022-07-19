function sockMerchant(n, ar) {

    let count = 0;
    let sorted = ar.sort((a, b) => a - b);

    for (let i = 0; i < ar.length; i++) {
        if (sorted[i] === sorted[i + 1]) {
            count++
            i++
        }
    }

    return countF

}