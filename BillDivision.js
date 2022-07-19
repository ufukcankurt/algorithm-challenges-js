
function bonAppetit(bill, k, b) {

    const result = bill.reduce((total, current) => (
        total += current
    ), 0)

    const diff = (result - bill[k]) / 2
    const sum = b - diff

    { (b === result / 2) ? console.log(sum) : console.log("Bon Appetit") }
}