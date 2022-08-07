
function findDigits(n) {

    const newArr = Array.from(String(n), Number);
    let count = 0

    newArr.map((num) => num === 0 || n % num !== 0 ? num : count++)
    return count

}