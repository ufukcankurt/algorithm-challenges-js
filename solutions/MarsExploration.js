function marsExploration(s) {

    const separated = (s.match(/.{1,3}/g));
    let count = 0;

    for (let i = 0; i < separated.length; i++) {

        const word = separated[i].split("")

        if (word[0] !== "S") {
            count = count + 1
        }

        if (word[1] !== "O") {
            count = count + 1
        }

        if (word[2] !== "S") {
            count = count + 1
        }
    }

    return count
}