function getSneakyNumbers(nums: number[]): number[] {
  let duplicate = nums.filter((value, index) => nums.indexOf(value) !== index && nums.lastIndexOf(value) === index);

  return duplicate;
}

//! Explanation:
// 1. The function `getSneakyNumbers` takes an array of numbers as input.
// 2. It uses the `filter` method to iterate through each number in the array.
// 3. For each number, it checks two conditions:
//    a. `nums.indexOf(value) !== index`: This checks if the first occurrence of the number is not at the current index, indicating that the number has appeared before.
//    b. `nums.lastIndexOf(value) === index`: This checks if the last occurrence of the number is at the current index, indicating that this is the second and final occurrence of the number.
// 4. If both conditions are true, it means the number is a "sneaky" number (appears exactly twice), and it is included in the resulting array.
// 5. Finally, the function returns an array of these sneaky numbers.
// Example usage:
// console.log(getSneakyNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [2, 3]
