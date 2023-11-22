function pickingNumbers(a) {

    var count = 0;
    var result = 0;
    let i = 0, j = 0;

    // sort the array by lowest to highest
    a.sort(function (a, b) { return a - b });

    for (i = 0; i < a.length; i++) {
        for (j = i + 1; j < a.length; j++) {
            if (a[j] - a[i] === 1 || a[j] - a[i] === 0) {
                count = count + 1;
            }
        }
        if (result === 0) {
            result = count;
            count = 0;
        }
        if (result < count) {
            result = count
            count = 0;
        } else {
            count = 0;
        }
    }

    return result + 1


}