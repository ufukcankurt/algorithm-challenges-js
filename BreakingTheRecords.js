function breakingRecords(scores) {
    let lowestScore = 0, highestScore = 0;
    let lowestCount = 0, highestCount = 0;

    for (let i = 0; i < scores.length; i++) {
        if (i === 0) {
            lowestScore = scores[0];
            highestScore = scores[0];
        } else {
            if (scores[i] < lowestScore) {
                lowestScore = scores[i]
                lowestCount++
            }
            if (scores[i] > highestScore) {
                highestScore = scores[i]
                highestCount++
            }
        }
    }
    
    return [highestCount, lowestCount]
}