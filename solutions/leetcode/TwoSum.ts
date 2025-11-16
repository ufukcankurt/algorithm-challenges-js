function twoSum(nums: number[], target: number): number[] {
    const map: Record<number, number> = {};

    for(let i = 0; i < nums.length ; i++){
        const diff = target - nums[i]
        
        if(map[diff] !== undefined){
            return [map[diff], i];
        }
        map[nums[i]] = i;
    }
    return [];
};

//! Explanation:
// 1. The function `twoSum` takes an array of numbers `nums` and a target number `target` as input.
// 2. It initializes an empty object `map` to store the numbers and their corresponding indices.
// 3. It iterates through the `nums` array using a for loop.
// 4. For each number, it calculates the difference `diff` between the target and the current number.
// 5. It checks if this difference exists in the `map`. If it does, it means we have found two numbers that add up to the target, and it returns their indices as an array.
// 6. If the difference is not found, it adds the current number and its index to the `map`.
// 7. If no such pair is found by the end of the loop, it returns an empty array.
// Example usage:
// console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
