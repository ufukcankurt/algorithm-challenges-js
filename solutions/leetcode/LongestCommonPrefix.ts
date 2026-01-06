function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return '';

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);

      if (prefix === '') return '';
    }
  }

  return prefix;
}

// !Explanation:
// The function `longestCommonPrefix` takes an array of strings and returns the longest common prefix among them.
// It initializes the prefix with the first string and iteratively checks each subsequent string.
// If the current string does not start with the prefix, it reduces the prefix by one character at a time until a match is found or the prefix becomes empty.
// If no common prefix exists, it returns an empty string.

// !Time Complexity: O(n * m) where n is the number of strings and m is the length of the longest string.
// !Space Complexity: O(1) since we are using a constant amount of space for the prefix.
// !This solution is efficient for finding the longest common prefix in a list of strings.
// !This code is a solution to the LeetCode problem "Longest Common Prefix".
