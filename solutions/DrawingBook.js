// Better solution
function pageCount(n, p) {

    const front = Math.floor(p / 2);
    const back = Math.floor((n / 2) - front);

    const result = Math.min(front, back);
    return result;

}




// My first solution
function pageCount(n, p) {

    let count = 0;

    if (n === 1 || p === n) return 0

    if (p <= n / 2) {
        for (let i = 1; i < p; i += 2) {
            count++
        }
    } else {
        for (let i = n; i > p; i -= 2) {
            if (i !== i % 2 && i - 1 === p) {
                return count
            } else {
                count++
            }
        }
    }
    return count
}