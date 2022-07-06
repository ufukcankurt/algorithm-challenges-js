function plusMinus(arr) {

    let positive = 0, negative = 0, zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negative += 1
        } else if (arr[i] > 0) {
            positive += 1
        } else {
            zero += 1
        }
    }

    const sumPositive = (positive / arr.length).toFixed(6)
    const sumNegative = (negative / arr.length).toFixed(6)
    const sumZero = (zero / arr.length).toFixed(6)

    console.log(sumPositive)
    console.log(sumNegative)
    console.log(sumZero)

}
