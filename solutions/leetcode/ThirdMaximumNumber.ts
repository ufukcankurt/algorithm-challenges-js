function thirdMax(nums: number[]): number {
  const uniqueNums = [...new Set(nums)];

  uniqueNums.sort((a, b) => b - a);

  if (uniqueNums.length >= 3) {
    return uniqueNums[2];
  } else {
    return uniqueNums[0];
  }
}

// !Explanation
// The function thirdMax takes an array of numbers (nums) as input and returns the third maximum number in the array. If the third maximum does not exist, it returns the maximum number instead.
// Here's a step-by-step explanation of how the function works:
// 1. It creates a new array uniqueNums that contains only the unique elements from the input array nums. This is done using a Set to remove duplicates and then spreading it back into an array.
// 2. It sorts the uniqueNums array in descending order using the sort method with a custom comparator (b - a).
// 3. It checks if the length of uniqueNums is at least 3. If it is, it returns the third element (index 2) from the sorted array, which is the third maximum number.
// 4. If there are fewer than 3 unique numbers, it returns the first element (index 0) from the sorted array, which is the maximum number.

// !Complexity Analysis
// - Time Complexity: O(n log n), where n is the length of the input array nums. This is due to the sorting step, which dominates the time complexity.
// - Space Complexity: O(n). The function uses additional space to store the unique elements in the uniqueNums array.

// !Example Usage
// const nums = [3, 2, 1];
// console.log(thirdMax(nums)); // Output: 1

// const nums2 = [1, 2];
// console.log(thirdMax(nums2)); // Output: 2

// const nums3 = [2, 2, 3, 1];
// console.log(thirdMax(nums3)); // Output: 1
