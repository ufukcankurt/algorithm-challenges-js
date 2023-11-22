function migratoryBirds(arr) {

    const array = [0, 0, 0, 0, 0];

    arr.map((bird) => array[bird - 1] += 1)
    const max = Math.max(...array);

    for (let i = 0; i < array.length; i++) {
        if (array[i] === max) return i + 1
    }
}