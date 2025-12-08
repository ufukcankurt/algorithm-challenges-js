function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // Find the middle point (round down with Math.floor)
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // Found it!
        } else if (nums[mid] < target) {
            // If the number we're looking for is greater than the middle one, look to the right.
            // Move the left boundary to one right of the middle.
            left = mid + 1;
        } else {
            // If the number we're looking for is less than the middle one, look to the left.
            // Move the right boundary to one left of the middle.
            right = mid - 1;
        }
    }

    return -1; // Not found
};

// !Explanation
// The function search takes a sorted array of numbers (nums) and a target number (target) as input.
// It uses the binary search algorithm to find the index of the target number in the array.

// The algorithm works by maintaining two pointers, left and right, which represent the current search boundaries.
// Initially, left is set to the start of the array (index 0) and right is set to the end of the array (last index).

// The while loop continues as long as left is less than or equal to right.
// Inside the loop, we calculate the middle index (mid) by taking the average of left and right and rounding down using Math.floor.

// We then compare the value at the middle index (nums[mid]) with the target number:
// - If they are equal, we have found the target and return its index (mid).
// - If nums[mid] is less than the target, it means the target must be in the right half of the array,
//   so we move the left boundary to mid + 1.
// - If nums[mid] is greater than the target, it means the target must be in the left half of the array,
//   so we move the right boundary to mid - 1.

// If the loop finishes without finding the target, we return -1 to indicate that the target is not present in the array.

// The time complexity of this solution is O(log n) because with each iteration, the search space is halved.
// The space complexity is O(1) since we are using only a constant amount of extra space.

// !Test Cases
console.log(search([-1,0,3,5,9,12], 9)); // Output: 4
console.log(search([-1,0,3,5,9,12], 2)); // Output: -1