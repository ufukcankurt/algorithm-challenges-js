function utopianTree(n) {

    let height = 1;
    for (let i = 1; i <= n; i++) {
        (i % 2 === 0 ? height += 1 : height = height * 2)
    }
    return height
}