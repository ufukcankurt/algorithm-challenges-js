function majorityElement(nums: number[]): number {
  let count = 0;
  let candidate = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

// !Explanation
// The function majorityElement takes an array of numbers (nums) as input and returns the majority element, which is defined as the element that appears more than n/2 times in the array, where n is the length of the array.
// Here's a step-by-step explanation of how the function works:
// 1. It initializes two variables: count to 0 and candidate to 0. The count variable keeps track of the number of times the current candidate has been seen, while candidate holds the current majority candidate.
// 2. It then iterates through each element of the array using a for loop.
// 3. Inside the loop, it checks if count is 0. If it is, it updates candidate to the current number (num). This means that when there are no current candidates, it selects the current number as a new candidate.
// 4. It then updates the count variable: if the current number (num) is equal to the candidate, it increments count by 1
//    ; otherwise, it decrements count by 1.
// 5. After the loop completes, the candidate variable will hold the majority element, which is then returned by the function.
// The function assumes that a majority element always exists in the input array, as per the problem's constraints.

// !Complexity Analysis
// - Time Complexity: O(n), where n is the length of the input array nums. The function makes a single pass through the array, performing constant-time operations for each element.
// - Space Complexity: O(1). The function uses a constant amount of extra space (the count and candidate variables) regardless of the size of the input array.

// !Example Usage
// const nums = [3, 2, 3];
// console.log(majorityElement(nums)); // Output: 3
// const nums2 = [2, 2, 1, 1, 1, 2, 2];
// console.log(majorityElement(nums2)); // Output: 2

// TODO: Alternative implementation using a hash map
function majorityElement2(nums: number[]): number {
  const map = new Map<number, number>();
  const limit = nums.length / 2;

  for (const num of nums) {
    const count = (map.get(num) || 0) + 1;
    map.set(num, count);

    if (count > limit) {
      return num;
    }
  }
  return 0;
}

// !Explanation
// The function majorityElement2 takes an array of numbers (nums) as input and returns the majority element using a hash map to count occurrences of each element.
// Here's a step-by-step explanation of how the function works:
// 1. It initializes a Map called map to store the count of each number in the array.
// 2. It calculates the limit as half the length of the array (n/2), which is used to determine if an element is the majority element.
// 3. It then iterates through each element of the array using a for loop.
// 4. Inside the loop, it retrieves the current count of the number (num) from the map, increments it by 1, and updates the map with the new count.
// 5. After updating the count, it checks if the count exceeds the limit. If it does, it immediately returns the current number (num) as the majority element.
// 6. If no majority element is found during the iteration (which should not happen according to problem constraints), it returns 0 as a fallback.
// The function uses a hash map to efficiently count occurrences of each element and identify the majority element.

// !Complexity Analysis
// - Time Complexity: O(n), where n is the length of the input array nums. The function makes a single pass through the array, performing constant-time operations for each element.
// - Space Complexity: O(n). In the worst case, the function may store all unique elements in the hash map, leading to linear space usage.

// !Example Usage
// const nums = [3, 2, 3];
// console.log(majorityElement2(nums)); // Output: 3
// const nums2 = [2, 2, 1, 1, 1, 2, 2];
// console.log(majorityElement2(nums2)); // Output: 2
