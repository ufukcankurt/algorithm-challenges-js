function birthdayCakeCandles(candles) {
  let sortedArray = candles.sort((a, b) => b - a);
  var count = 0;
  var biggest = sortedArray[0];

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === biggest) count++;
  }

  return count;
}
