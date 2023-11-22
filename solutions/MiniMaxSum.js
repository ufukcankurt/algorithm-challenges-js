function miniMaxSum(arr) {
    let firstSum = 0, secondSum = 0;
    let lowestToHighest = arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 1) {
            firstSum += lowestToHighest[i]
        }
        if (i > 0) {
            secondSum += lowestToHighest[i]
        }
    }
    console.log(`${firstSum} ${secondSum}`)
}