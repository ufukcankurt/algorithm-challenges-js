function catAndMouse(x, y, z) {
    const catA = Math.abs(z - x)
    const catB = Math.abs(z - y)

    if (catA > catB) {
        return "Cat B"
    } else if (catB > catA) {
        return "Cat A"
    } else {
        return "Mouse C"
    }
}