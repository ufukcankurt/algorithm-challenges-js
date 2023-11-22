/**
 * The function `aVeryBigSum` calculates the sum of all the elements in an array, using BigInt to
 * handle large numbers.
 * @param ar - The parameter `ar` is an array of numbers.
 * @returns The function `aVeryBigSum` returns the sum of all the elements in the `ar` array.
 */

function aVeryBigSum(ar) {
  let sum = BigInt(0);

  for (let i = 0; i < ar.length; i++) {
    sum += BigInt(ar[i]);
  }

  return sum;
}
