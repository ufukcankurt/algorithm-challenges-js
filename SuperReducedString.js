function superReducedString(s) {

    let val = s.split('');

    for (let i = 0; i < val.length; ++i) {
        if (val[i] === val[i + 1]) {
            val.splice(i, 2);
            i = -1;
        }
    }

    if (val.length === 0) return 'Empty String';

    return val.join('')
}