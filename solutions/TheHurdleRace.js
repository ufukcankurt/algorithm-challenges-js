function hurdleRace(k, height) {
    let max = Math.max(...height);

    if (max < k) {
        return 0
    } else {
        return max - k;
    }

}