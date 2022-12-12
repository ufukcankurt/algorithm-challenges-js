function hackerrankInString(s) {

    const value = "hackerrank"
    let index = 0;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        const current = value[index];

        if (current === s[i]) {
            index++
            count++
        }
    }
    return count !== value.length ? "NO" : "YES";
}