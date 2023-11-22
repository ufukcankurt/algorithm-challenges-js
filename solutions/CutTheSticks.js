function cutTheSticks(arr) {

    let size = [];

    while (arr.length > 0) {

        let minValue = Math.min(...arr);
        size.push(arr.length);
        for (let i = 0; i < arr.length; i++) {
            let sub = arr[i] - minValue;

            if (sub === 0) {
                arr.splice(i, 1);
                i -= 1;
            } else {
                arr[i] = sub;
            }
        }
    }
    return size;

}