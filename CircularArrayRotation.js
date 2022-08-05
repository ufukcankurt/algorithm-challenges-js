function circularArrayRotation(a, k, queries) {

    let result = []

    for (let i = 0; i < k; i++) {
        a.unshift(a[a.length - 1])
        a.pop()
    }

    queries.map((q) => result.push(a[q]))

    return result

}