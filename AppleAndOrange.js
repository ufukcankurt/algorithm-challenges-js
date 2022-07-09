function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let orangeCount = 0;
    let appleCount = 0;

    oranges.map(orange => {
        if (orange + b <= t && orange + b >= s) {
            orangeCount++
        };
    });

    apples.map(apple => {
        if (apple + a >= s && apple + a <= t) {
            appleCount++
        };
    });


    console.log(appleCount)
    console.log(orangeCount)

}