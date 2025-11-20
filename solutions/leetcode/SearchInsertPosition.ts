function searchInsert2(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
}

//! First Approach: Linear Search
// time complexity: O(n)
// The above solution iterates through the array linearly until it finds the target or the position where the target should be inserted. In the worst case, it may need to check every element in the array, leading to a time complexity of O(n).

// ? The Question was asking for an efficient solution with a time complexity of O(log n).
// ? Desc: You must write an algorithm with O(log n) runtime complexity.
// ? O(log n) >  O(n)    | So, we can use Binary Search to achieve that.

//! Second Approach: Binary Search
// time complexity: O(log n)
// The binary search algorithm divides the search space in half with each iteration, leading to a logarithmic time complexity of O(log n). This makes it much more efficient for large arrays compared to the linear search approach.

function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

//! Explanation
// 1. The function `searchInsert` takes a sorted array `nums` and a `target` value.
// 2. It uses a binary search algorithm to find the index of the target or the position where it should be inserted.
// 3. It initializes two pointers, `left` and `right`, to represent the current search range.
// 4. It calculates the middle index and compares the middle element with the target.
// 5. Depending on the comparison, it adjusts the search range by moving either the `left` or `right` pointer.
// 6. If the target is found, it returns the index; otherwise, it returns the `left` pointer, which indicates the insertion position.

// Example usage:
// console.log(searchInsertWithBinarySearch([1,3,5,6], 5)); // Output: 2
// console.log(searchInsertWithBinarySearch([1,3,5,6], 2)); // Output: 1
// console.log(searchInsertWithBinarySearch([1,3,5,6], 7)); // Output: 4
// console.log(searchInsertWithBinarySearch([1,3,5,6], 0)); // Output: 0