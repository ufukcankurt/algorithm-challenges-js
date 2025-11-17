function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let i = 1;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[j - 1]) {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
}

//! Explanation:
// 1. The function `removeDuplicates` takes a sorted array of numbers `nums` as input.
// 2. It first checks if the array is empty. If it is, it returns 0 since there are no elements.
// 3. It initializes a pointer `i` to 1, which will track the position of the next unique element.
// 4. It iterates through the array starting from the second element (index 1) using a for loop with index `j`.
// 5. For each element, it compares it with the previous element. If they are different, it means the current element is unique.
// 6. It assigns the current unique element to the position indicated by `i` and increments `i`.
// 7. After the loop completes, it returns `i`, which represents the number of unique elements in the array.
// Example usage:
// const nums = [0,0,1,1,1,2,2,3,3,4];
// const length = removeDuplicates(nums);
// console.log(length); // Output: 5
// console.log(nums.slice(0, length)); // Output: [0, 1, 2, 3, 4]