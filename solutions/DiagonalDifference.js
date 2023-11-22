function diagonalDifference(arr) {

    let value = arr.length - 1
    let leftToRight = 0, rightToLeft = 0;

    for (let i = 0; i < arr.length; i++) {
        leftToRight += arr[i][i]
        rightToLeft += arr[i][value]
        value -= 1
    }

    const diff = leftToRight - rightToLeft
    return Math.abs(diff)

}