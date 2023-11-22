function kangaroo(x1, v1, x2, v2) {

    let firstPosition = x1;
    let firstJump = v1
    let secondPosition = x2;
    let secondJump = v2;

    for (let i = 0; i < 10000; i++) {
        if (firstPosition < secondPosition && firstJump < secondJump || firstJump === secondJump) return "NO"
        if (firstPosition < secondPosition) {
            firstPosition += firstJump
            secondPosition += secondJump

            if (firstPosition === secondPosition) {
                return "YES"
            }
        }
        if (firstPosition > secondPosition) return "NO"
    }
}