function viralAdvertising(n) {

    let shared = 5;
    let liked = 0, cumulative = 0;

    for (let i = 1; i <= n; i++) {
        liked = Math.floor(shared / 2)
        cumulative = cumulative + liked
        shared = liked * 3
    }

    return cumulative
}