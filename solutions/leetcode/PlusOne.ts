function plusOne(digits: number[]): number[] {
    for(let i = digits.length - 1 ; i >= 0; i--){
        if(digits[i] < 9){
            digits[i]++
            return digits
        }
        digits[i] = 0
    }

    digits.unshift(1);

    return digits;
};

//! Explanation
// 1. The function `plusOne` takes an array of digits representing a non-negative integer.
// 2. It iterates through the array from the last digit to the first.
// 3. If a digit is less than 9, it increments that digit by 1 and returns the modified array.
// 4. If a digit is 9, it sets that digit to 0 and continues to the next digit to the left.
// 5. If all digits are 9, after the loop, it adds a new digit '1' at the beginning of the array.
// Example usage:
// console.log(plusOne([1,2,3])); // Output: [1,2,4]
// console.log(plusOne([9])); // Output: [1,0]
// console.log(plusOne([1,9])); // Output: [2,0]
// console.log(plusOne([4,3,9,9])); // Output: [4,4,0,0]
// console.log(plusOne([9,9,9])); // Output: [1,0,0,0]