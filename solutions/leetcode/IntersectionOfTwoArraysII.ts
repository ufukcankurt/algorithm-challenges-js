function intersect(nums1: number[], nums2: number[]): number[] {
    const map = new Map<number, number>();

    for (const num of nums1) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const result: number[] = [];

    for (const num of nums2) {
        const count = map.get(num);
        
        if (count && count > 0) {
            result.push(num);
            map.set(num, count - 1);
        }
    }

    return result;
};

// !Explanation
// The function intersect takes two arrays of numbers as input and returns an array containing the elements that are present in both input arrays, including duplicates.
// It uses a map to count the occurrences of each number in the first array, then iterates through the second array to find common elements based on the counts stored in the map.

// !Complexity Analysis
// Time Complexity: O(n + m), where n and m are the lengths of nums1 and nums2 respectively. This is because we traverse both arrays once.
// Space Complexity: O(min(n, m)), where n and m are the lengths of nums1 and nums2 respectively. This is due to the storage of counts in the map for the smaller array.

// !Example Usage
// console.log(intersect([1,2,2,1], [2,2])); // Output: [2,2]
// console.log(intersect([4,9,5], [9,4,9,8,4])); // Output: [4,9] or [9,4]