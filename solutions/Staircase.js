function staircase(n) {

    for (let i = 1; i <= n; i++) {
        let value = ""
        for (let x = n; x > 0; x--) {
            if (x <= i) {
                value += "#"
            } else {
                value += " "
            }
        }
        console.log(value)
    }
}