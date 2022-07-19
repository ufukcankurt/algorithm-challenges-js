function getMoneySpent(keyboards, drives, b) {

    let max = 0;


    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            if (keyboards[i] + drives[j] <= b && keyboards[i] + drives[j] > max) {
                max = keyboards[i] + drives[j]
            }
        }
    }

    if (max !== 0) {
        return max
    } else {
        return -1
    }

}