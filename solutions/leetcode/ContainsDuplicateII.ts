function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const seenMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];

        if (seenMap.has(currentNum)) {
            const previousIndex = seenMap.get(currentNum);

            if (i - previousIndex! <= k) {
                return true; 
            }
        }
        seenMap.set(currentNum, i);
    }

    return false;
};

//! Explanation
// 1. The function `containsNearbyDuplicate` takes an array of numbers `nums` and an integer `k` as input.
// 2. It initializes a Map called `seenMap` to keep track of the last index where each number was seen.
// 3. It iterates through the array using a for loop.
// 4. For each number, it checks if the number has been seen before by looking it up in the `seenMap`.
// 5. If the number has been seen, it retrieves the previous index and checks if the difference between the current index and the previous index is less than or equal to `k`.
// 6. If the condition is met, it returns true, indicating that a duplicate within the specified distance has been found.
// 7. If the number has not been seen before, or if the condition is not met, it updates the `seenMap` with the current index of the number.
// 8. If no such duplicates are found after checking all numbers, it returns false.

// Example usage:
// console.log(containsNearbyDuplicate([1,2,3,1], 3)); // Output: true
// console.log(containsNearbyDuplicate([1,0,1,1], 1)); // Output: true
// console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)); // Output: false

// ! Time Complexity: O(n)
// The time complexity of this solution is O(n) because we iterate through the array once, performing constant time operations 
// (Map lookups and insertions) for each element. Thus, the overall time complexity is linear with respect to the size of the input array.
