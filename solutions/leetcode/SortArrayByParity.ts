function sortArrayByParity(nums: number[]): number[] {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    if (nums[i] % 2 === 0) {
      i++;
    } else if (nums[j] % 2 === 1) {
      j--;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];

      i++;
      j--;
    }
  }

  return nums;
}

// !Explanation
// The function sortArrayByParity takes an array of numbers (nums) as input and rearranges the elements in the array such that all even numbers come before all odd numbers. The function modifies the array in place and returns the modified array.
// Here's a step-by-step explanation of how the function works:
// 1. It initializes two pointers, i and j. The pointer i starts at the beginning of the array (index 0), and the pointer j starts at the end of the array (index nums.length - 1).
// 2. It enters a while loop that continues as long as i is less than j.
// 3. Inside the loop, it checks the following conditions:
//    a. If the element at index i (nums[i]) is even (i.e., nums[i] % 2 === 0), it increments i by 1 to move to the next element.
//    b. If the element at index j (nums[j]) is odd (i.e., nums[j] % 2 === 1), it decrements j by 1 to move to the previous element.
//    c. If nums[i] is odd and nums[j] is even, it swaps the elements at indices i and j. After the swap, it increments i by 1 and decrements j by 1 to continue checking the next elements.
// 4. The loop continues until the two pointers meet or cross each other.
// 5. Finally, the function returns the modified array, which now has all even numbers at the front and all odd numbers at the back.

// !Complexity Analysis
// - Time Complexity: O(n), where n is the length of the input array nums. The function makes a single pass through the array, performing constant-time operations for each element.
// - Space Complexity: O(1). The function uses a constant amount of extra space (the two pointers i and j) regardless of the size of the input array. The modifications are done in place.

// !Example Usage
// const nums = [3, 1, 2, 4];
// const sortedArray = sortArrayByParity(nums);
// console.log(sortedArray); // Output: [4, 2, 1, 3] (or any other arrangement with evens first and odds last)
// const nums2 = [0, 5, 8, 7, 2, 1];
// const sortedArray2 = sortArrayByParity(nums2);
// console.log(sortedArray2); // Output: [2, 8, 0, 7, 5, 1] (or any other arrangement with evens first and odds last)
