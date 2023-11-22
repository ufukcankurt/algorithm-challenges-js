function jumpingOnClouds(c, k) {

    let location = -1;
    let energy = 100;

    while (location !== 0) {

        if (location === -1) location++;
        location += k

        if (c.length <= location) location = location % c.length

        if (c[location] === 1) energy -= 3
        else energy -= 1
    }
    return energy
}
