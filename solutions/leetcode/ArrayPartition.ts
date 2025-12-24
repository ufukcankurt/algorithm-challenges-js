function arrayPairSum(nums: number[]): number {
 nums.sort((a, b) => a - b);

    let result = 0;

    nums.forEach((num, i) => {
        if (i % 2 === 0) {
            result += num;
        }
    });

    return result;
};

// !Explanation
// This function maximizes the sum of the minimums of n pairs formed from the array.
// It first sorts the array, then sums up every second element starting from the first.
// This works because pairing the smallest numbers together maximizes the minimums.

// !Complexity Analysis
// Time Complexity: O(n log n), where n is the number of elements in the array. This is due to the sorting step.
// Space Complexity: O(1), as we use a constant amount of extra space regardless of input size.

// !Example Usage
// console.log(arrayPairSum([1,4,3,2])); // Output: 4
// console.log(arrayPairSum([6,2,6,5,1,2])); // Output: 9