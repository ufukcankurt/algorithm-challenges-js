function intersection(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set(nums1);

    const resultSet = new Set<number>;

    for(const num of nums2){
        if(set1.has(num)){
            resultSet.add(num)
        }
    }

    return [...resultSet]
};

// !Explanation
// The function intersection takes two arrays of numbers as input and returns an array containing the unique elements that are present in both input arrays.
// It uses two sets to efficiently track the elements in the first array and to store the intersection results.

// !Complexity Analysis
// Time Complexity: O(n + m), where n and m are the lengths of nums1 and nums2 respectively. This is because we traverse both arrays once.
// Space Complexity: O(min(n, m)), where n and m are the lengths of nums1 and nums2 respectively. This is due to the storage of the intersection results in a set.

// !Example Usage
// console.log(intersection([1,2,2,1], [2,2])); // Output: [2]
// console.log(intersection([4,9,5], [9,4,9,8,4])); // Output: [9,4] or [4,9]