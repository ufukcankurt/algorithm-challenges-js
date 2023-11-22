function jumpingOnClouds(c) {
    let current = 0;
    let count = 0;

    while (current < c.length - 1) {
        if (c[current + 2] === 1 || current + 2 === c.length) {
            current = current + 1
        } else {
            current = current + 2
        }
        count++
    }
    return count
}