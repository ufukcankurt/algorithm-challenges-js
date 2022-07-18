function divisibleSumPairs(n, k, ar) {

    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const value = ar[i] + ar[j]
            if (value % k === 0) {
                count++
            }
        }
    }
    return count

}