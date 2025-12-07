// !My Solution
function missingNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i !== nums[i]) {
      return i;
    }
  }

  // If the loop finishes without returning,
  // the missing number is at the end of the array (i.e., n).
  // e.g., [0, 1] -> missing is 2 (length)
  return nums.length;
}

// !Explanation
// The function missingNumber takes an array of numbers (nums) as input,
// which contains n distinct numbers ranging from 0 to n.
// The goal is to find the missing number in this range.

// First, the function sorts the array in ascending order using the sort method.
// Then, it iterates through the sorted array using a for loop.
// During each iteration, it checks if the current index (i) matches the value at that index (nums[i]).
// If there is a mismatch, it means that the missing number is equal to the current index (i),
// and the function returns that index as the result.

// If the loop completes without finding any mismatches, it means that all numbers from 0 to n-1 are present in the array.
// In this case, the missing number must be n itself, so the function returns nums.length as the final result.

// The time complexity of this solution is O(n log n) due to the sorting step,
// and the space complexity is O(1) since no additional data structures are used
// that grow with the input size.


// !Other Solutions
// Solution 1: Gauss Formula
function missingNumberGauss(nums: number[]): number {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2; // Expected sum using Gauss formula
  const actualSum = nums.reduce((acc, num) => acc + num, 0); // Actual sum of the array elements

  return expectedSum - actualSum; // Missing number
}

// !Explanation of Other Solution
// This solution uses the Gauss formula to find the missing number in the array.
// The formula for the sum of the first n natural numbers is n * (n + 1) / 2.
// We calculate the expected sum of numbers from 0 to n using this formula.
// Then, we calculate the actual sum of the numbers present in the array using the reduce method.
// The difference between the expected sum and the actual sum gives us the missing number.
// This approach has a time complexity of O(n) and a space complexity of O(1).

// !Test Cases
console.log(missingNumber([3, 0, 1])); // Output: 2
console.log(missingNumber([0, 1]));    // Output: 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // Output: 8
console.log(missingNumber([0]));       // Output: 1