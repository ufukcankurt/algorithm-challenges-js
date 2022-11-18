
function camelcase(s) {

    let count = 1;

    for (let i = 1; i < s.length - 1; i++) {
        if (s[i] >= 'A' && s[i] <= 'Z')
            count++;
    }

    return count;
}