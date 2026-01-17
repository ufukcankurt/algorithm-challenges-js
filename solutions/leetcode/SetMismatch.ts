function findErrorNums(nums: number[]): number[] {
  const map = new Map<number, number>();
  const n = nums.length;

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let duplicate = -1;
  let missing = -1;

  for (let i = 1; i <= n; i++) {
    const count = map.get(i) || 0;

    if (count === 2) {
      duplicate = i;
    } else if (count === 0) {
      missing = i;
    }
  }

  return [duplicate, missing];
}

// !Explanation
// The function findErrorNums takes an array of numbers (nums) as input, where the numbers are supposed to be from 1 to n (n being the length of the array). However, one number is duplicated, and one number is missing. The function identifies and returns both the duplicated and missing numbers in an array.
// Here's a step-by-step explanation of how the function works:
// 1. It initializes a Map called map to keep track of the frequency of each number in the input array.
// 2. It iterates through each number in the nums array and updates the count of each number in the map.
// 3. It initializes two variables, duplicate and missing, to store the duplicated and missing numbers, respectively.
// 4. It then iterates through the numbers from 1 to n (the expected range of numbers):
//    a. For each number i, it checks its count in the map.
//    b. If the count is 2, it means that the number is duplicated, so it assigns i to the duplicate variable.
//    c. If the count is 0, it means that the number is missing, so it assigns i to the missing variable.
// 5. Finally, it returns an array containing the duplicate and missing numbers.
// The function effectively identifies the duplicated and missing numbers by leveraging a frequency map to track occurrences of each number in the input array.

// !Complexity Analysis
// - Time Complexity: O(n), where n is the length of the input array nums. The function makes two passes through the array: one to build the frequency map and another to identify the duplicate and missing numbers.
// - Space Complexity: O(n). The function uses a map to store the frequency of each number, which in the worst case can store n entries.

// !Example Usage
// const nums = [1, 2, 2, 4];
// const result = findErrorNums(nums);
// console.log(result); // Output: [2, 3]
