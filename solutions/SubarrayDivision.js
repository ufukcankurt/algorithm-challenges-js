function birthday(s, d, m) {

    let count = 0;

    for (let i = 0; i < s.length; i++) {
        const result = s.slice(i, i + m).reduce((sum, current) => sum + current, 0)
        if (result === d) count++
    }

    return count

}