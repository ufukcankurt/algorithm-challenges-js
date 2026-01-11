function findDisappearedNumbers(nums: number[]): number[] {
  const numSet = new Set(nums);

  const result: number[] = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!numSet.has(i)) {
      result.push(i);
    }
  }

  return result;
}

// !Explanation
// The function findDisappearedNumbers takes an array of numbers (nums) as input and returns an array of all the numbers in the range from 1 to n (where n is the length of nums) that are missing from nums.
// Here's a step-by-step explanation of how the function works:
// 1. It initializes a Set called numSet and populates it with all the elements from the input array nums. This allows for O(1) average time complexity for lookups.
// 2. It then initializes an empty array called result to store the missing numbers.
// 3. The function uses a for loop to iterate through all integers from 1 to n (inclusive), where n is the length of the input array nums.
// 4. Inside the loop, it checks if the current integer i is not present in numSet using the has method. If i is not found in numSet, it means that i is missing from nums.
// 5. If i is missing, it is added to the result array.
// 6. After the loop completes, the function returns the result array containing all the missing numbers.

// !Complexity Analysis
// - Time Complexity: O(n), where n is the length of the input array nums. The function makes a single pass to populate the Set and another pass to check for missing numbers.
// - Space Complexity: O(n). The function uses additional space to store the Set and the result array, both of which can grow up to size n in the worst case.

// !Example Usage
// const nums = [4, 3, 2, 7, 8, 2, 3, 1];
// const missingNumbers = findDisappearedNumbers(nums);
// console.log(missingNumbers); // Output: [5, 6]

function findDisappearedNumbers2(nums: number[]): number[] {
  let i = 0;

  while (i < nums.length) {
    const correctIndex = nums[i] - 1;

    if (nums[i] !== nums[correctIndex]) {
      [nums[correctIndex], nums[i]] = [nums[i], nums[correctIndex]];
    } else {
      i++;
    }
  }

  const result: number[] = [];

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j + 1) {
      result.push(j + 1);
    }
  }

  return result;
}

// !Explanation
// The function findDisappearedNumbers2 takes an array of numbers (nums) as input and returns an array of all the numbers in the range from 1 to n (where n is the length of nums) that are missing from nums.
// Here's a step-by-step explanation of how the function works:
// 1. It initializes a variable i to 0, which will be used to iterate through the array.
// 2. The function enters a while loop that continues until i is less than the length of nums.
// 3. Inside the loop, it calculates the correct index for the current element nums[i] as correctIndex = nums[i] - 1.
// 4. It then checks if the current element nums[i] is not equal to the element at its correct index nums[correctIndex]. If they are not equal, it swaps the two elements to place nums[i] in its correct position.
// 5. If they are equal, it increments i to move to the next element.
// 6. After the while loop completes, all elements that can be placed in their correct positions will be in place.
// 7. The function then initializes an empty array called result to store the missing numbers.
// 8. It uses a for loop to iterate through the array again. For each index j, it checks if nums[j] is not equal to j + 1. If they are not equal, it means that j + 1 is missing from nums, and it is added to the result array.
// 9. Finally, the function returns the result array containing all the missing numbers.

// !Complexity Analysis
// - Time Complexity: O(n), where n is the length of the input array nums. The function makes a single pass to rearrange the elements and another pass to check for missing numbers.
// - Space Complexity: O(1). The function uses a constant amount of extra space regardless of the size of the input array. The modifications are done in place.

// !Example Usage
// const nums = [4, 3, 2, 7, 8, 2, 3, 1];
// const missingNumbers = findDisappearedNumbers2(nums);
// console.log(missingNumbers); // Output: [5, 6]
