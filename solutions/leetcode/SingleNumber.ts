function singleNumber(nums: number[]): number {
    let result = 0;

    for (const num of nums) {
        result ^= num;
    }

    return result;
};

// ?TR:
// XOR operatörü (^=) kullanarak sayıları işliyoruz.
// Aynı sayılar birbirini 'iptal eder' (0 olur).
// Sonda sadece eşi olmayan tek sayı kalır.

// !Explanation
// This function finds the single number in an array where every other number appears twice.
// It uses the XOR bitwise operation, which has the property that a ^ a = 0 and a ^ 0 = a.
// By XORing all numbers together, the pairs cancel out, leaving only the unique number.

// !Complexity Analysis
// Time Complexity: O(n), where n is the number of elements in the array. We traverse the array once.
// Space Complexity: O(1), as we use a constant amount of extra space regardless of input size.

// !Example Usage
// console.log(singleNumber([4, 1, 2, 1, 2])); // Output: 4
// console.log(singleNumber([2, 2, 1]));       // Output: 1