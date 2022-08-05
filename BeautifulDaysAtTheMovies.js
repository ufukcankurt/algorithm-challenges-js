function beautifulDays(i, j, k) {

    let count = 0;
    function reverseInt(n) {
        return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
    }

    for (let x = i; x <= j; x++) {
        const result = x - Math.abs(reverseInt(x))
        result % k === 0 ? count++ : x
    }

    return count
}