function removeElement(nums: number[], val: number): number {
    let i = 0;

    for(let z = 0 ; z < nums.length; z++ ){
        if(nums[z] !== val){
            nums[i] = nums[z];
            i++;
        }
    }
    
    return i; // the number of not included val elements
};

//! Explanation:
// 1. The function `removeElement` takes an array of numbers `nums` and a value `val` as input.
// 2. It initializes a pointer `i` to 0, which will track the position of the next element that is not equal to `val`.
// 3. It iterates through the `nums` array using a for loop with index `z`.
// 4. For each element, it checks if it is not equal to `val`. If it is not equal, it assigns the current element to the position indicated by `i` and increments `i`.
// 5. After the loop completes, it returns `i`, which represents the number of elements in the array that are not equal to `val`.
// Example usage:
// const nums = [3,2,2,3];
// const val = 3;
// const length = removeElement(nums, val);
// console.log(length); // Output: 2
// console.log(nums.slice(0, length)); // Output: [2, 2]