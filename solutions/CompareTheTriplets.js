function compareTriplets(a, b) {
    let alice = 0, bob = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] < b[i]) {
            bob += 1
        } else if (a[i] > b[i]) {
            alice += 1
        } else {
            continue
        }
    }
    return [alice, bob]
}