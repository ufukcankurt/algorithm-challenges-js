function summaryRanges(nums: number[]): string[] {
  const result: string[] = [];
  let i = 0;

  while (i < nums.length) {
    const start = nums[i];

    while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
      i++;
    }

    const end = nums[i];

    if (start === end) {
      result.push(start.toString());
    } else {
      result.push(`${start}->${end}`);
    }

    i++;
  }

  return result;
}

// !Explanation
// The function summaryRanges takes an array of sorted unique integers (nums) as input and returns an array of strings representing the summary of ranges in the input array.
// Here's a step-by-step explanation of how the function works:
// 1. It initializes an empty array result to store the summary ranges.
// 2. It uses a while loop to iterate through the input array nums. The loop continues until the index i reaches the end of the array.
// 3. Inside the loop, it records the starting number of the current range in the variable start.
// 4. It then uses another while loop to check for consecutive numbers in the array. If the next number (nums[i + 1]) is equal to the current number (nums[i]) plus one, it increments i to continue checking for more consecutive numbers.
// 5. After exiting the inner loop, it records the ending number of the current range in the variable end.
// 6. It checks if start and end are equal. If they are equal, it means there is no range, and it adds the single number as a string to the result array. If they are not equal, it adds the range in the format "start->end" to the result array.
// 7. It increments i to move to the next number in the array and continues the process until all numbers have been processed.
// 8. Finally, it returns the result array containing the summary of ranges.

// !Complexity Analysis
// - Time Complexity: O(n), where n is the length of the input array nums. The function makes a single pass through the array, performing constant-time operations for each element.
// - Space Complexity: O(m), where m is the number of ranges found in the input array. The result array stores these ranges, which can vary based on the input.

// !Example Usage
// const nums = [0, 1, 2, 4, 5, 7];
// const ranges = summaryRanges(nums);
// console.log(ranges); // Output: ["0->2", "4->5", "7"]
