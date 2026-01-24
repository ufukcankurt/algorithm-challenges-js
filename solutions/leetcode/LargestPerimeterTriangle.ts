function largestPerimeter(nums: number[]): number {
  nums.sort((a, b) => b - a);

  for (let i = 0; i < nums.length - 2; i++) {
    const c = nums[i]; // The largest side candidate
    const b = nums[i + 1]; // The middle side candidate
    const a = nums[i + 2]; // The smallest side candidate

    // (Triangle Inequality Check): Is the sum of the two smaller sides GREATER than the largest side?
    if (a + b > c) {
      return a + b + c;
    }
  }

  return 0;
}

// !Explanation
// The function largestPerimeter takes an array of numbers (nums) as input and returns the largest perimeter of a triangle that can be formed with three of the lengths in the array. If no triangle can be formed, it returns 0.
// Here's a step-by-step explanation of how the function works:
// 1. It sorts the input array in descending order. This allows us to easily check for the largest possible triangle first.
// 2. It then iterates through the sorted array using a for loop, checking each triplet of consecutive elements (i, i+1, i+2).
// 3. For each triplet, it checks if the sum of the two smaller sides (a and b) is greater than the largest side (c). This is based on the triangle inequality theorem.
// 4. If a valid triangle is found, it returns the perimeter (a + b + c) immediately, as this will be the largest perimeter due to the sorting.
// 5. If no valid triangle is found after checking all triplets, the function returns 0.

// !Complexity Analysis
// - Time Complexity: O(n log n), where n is the length of the input array nums. This is due to the sorting step, which dominates the overall time complexity.
// - Space Complexity: O(1) if we ignore the space used by the sorting algorithm (which may use O(n) space depending on the implementation). The function itself uses a constant amount of extra space.

// !Example Usage
// const nums = [2, 1, 2];
// const result = largestPerimeter(nums);
// console.log(result); // Output: 5

// const nums2 = [1, 2, 1];
// const result2 = largestPerimeter(nums2);
// console.log(result2); // Output: 0
