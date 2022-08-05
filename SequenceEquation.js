function permutationEquation(p) {

    const result = []

    for (let i = 1; i <= p.length; i++) {
        const findIndexFirst = p.findIndex((val) => val == i);
        const findIndexValue = p.findIndex((val) => val == findIndexFirst + 1);
        result.push(findIndexValue + 1)
    }

    return result
}