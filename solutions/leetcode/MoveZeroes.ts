function moveZeroes(nums: number[]): void {
    let insertPos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[insertPos], nums[i]] = [nums[i], nums[insertPos]];

            insertPos++;
        }
    }
};

// !Explanation
// The function moveZeroes takes an array of numbers (nums) as input and modifies it in place to move all the zeros to the end of the array while maintaining the relative order of the non-zero elements.
// Here's a step-by-step explanation of how the function works:
// 1. It initializes a variable insertPos to 0. This variable keeps track of the position where the next non-zero element should be placed in the array.
// 2. It then iterates through each element of the array using a for loop. The loop variable i goes from 0 to nums.length - 1.
// 3. Inside the loop, it checks if the current element nums[i] is not equal to zero. If it is a non-zero element, it performs the following actions:
//    a. It swaps the current element nums[i] with the element at the insertPos index. This effectively moves the non-zero element to its correct position in the array.
//    b. It increments insertPos by 1, so that it points to the next position where a non-zero element should be placed.
// 4. If the current element nums[i] is zero, the function simply continues to the next iteration without making any changes.
// 5. After the loop completes, all non-zero elements will have been moved to the front of the array in their original order, and all zeros will be at the end of the array.
// The function does not return anything (void) because it modifies the input array nums directly.

// !Complexity Analysis
// - Time Complexity: O(n), where n is the length of the input array nums. The function makes a single pass through the array, performing constant-time operations for each element.
// - Space Complexity: O(1). The function uses a constant amount of extra space (the insertPos variable) regardless of the size of the input array. The modifications are done in place.

// !Example Usage
// const nums = [0, 1, 0, 3, 12];
// moveZeroes(nums);
// console.log(nums); // Output: [1, 3, 12, 0, 0]