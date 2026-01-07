/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }

  nums1.sort((a, b) => a - b);
}

// !Explanation
// The function merge takes two sorted arrays, nums1 and nums2, along with their respective sizes m and n. The goal is to merge nums2 into nums1 in a sorted manner.
// Here's a step-by-step explanation of how the function works:
// 1. It starts by iterating through each element of nums2 using a for loop that runs n times (the size of nums2).
// 2. Inside the loop, it places each element of nums2 into the appropriate position in nums1, starting from index m. This is done by assigning nums2[i] to nums1[m + i].
// 3. After all elements from nums2 have been copied into nums1, the function calls the sort method on nums1 to sort the entire array in ascending order.
// 4. The sort method uses a comparison function (a, b) => a - b to ensure that the numbers are sorted numerically rather than lexicographically.
// 5. The function does not return anything (void) because it modifies the input array nums1 directly.

// !Complexity Analysis
// - Time Complexity: O((m + n) log(m + n)), where m is the number of initialized elements in nums1 and n is the number of elements in nums2. The sorting step dominates the time complexity.
// - Space Complexity: O(1). The function uses a constant amount of extra space for the loop variable i. The modifications are done in place.

// !Example Usage
// const nums1 = [1, 2, 3, 0, 0, 0];
// const m = 3;
// const nums2 = [2, 5, 6];
// const n = 3;
// merge(nums1, m, nums2, n);
// console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
