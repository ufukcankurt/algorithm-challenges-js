function containsDuplicate(nums: number[]): boolean {
    return new Set(nums).size !== nums.length;
};

// ? TR Explanation
// Set yapısı duplicate değerleri otomatik olarak temizler.
// Eğer oluşan set'in boyutu (size) dizinin uzunluğundan (length) küçükse,
// demek ki duplicate varmış ve true döneriz.

//! Explanation
// 1. The function `containsDuplicate` takes an array of numbers as input.
// 2. It creates a Set from the input array. A Set is a collection that only stores unique values.
// 3. It compares the size of the Set (which contains only unique elements) with the length of the original array.
// 4. If the size of the Set is not equal to the length of the array, it means there were duplicate elements in the array, and the function returns true.
// 5. If the sizes are equal, it means all elements were unique, and the function returns false.

// Example usage:
// console.log(containsDuplicate([1,2,3,1])); // Output: true
// console.log(containsDuplicate([1,2,3,4])); // Output: false
// console.log(containsDuplicate([1,1,1,1])); // Output: true

// ! Time Complexity: O(n)
// The time complexity of this solution is O(n) because creating a Set from the array involves iterating through the array once to add each element to the Set. The size comparison is done in constant time O(1). Thus, the overall time complexity is dominated by the O(n) operation of creating the Set.