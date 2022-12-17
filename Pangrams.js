/**
 * We take the string, convert it to lowercase, split it into an array, then map over the array and
 * check if the alphabet array includes the current character. If it does, we set the character in the
 * alphabet array to 0. If it doesn't, we leave the character as is. Then we map over the alphabet
 * array and check if any of the characters are not 0. If they are not 0, we set the result to false.
 * If they are all 0, we leave the result as true. Then we return the result
 * @param s - string to test
 * @returns A string that says "pangram" or "not pangram"
 */
function pangrams(s) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let result = true;

    let str = s.toLowerCase().split("");

    str.map((char) => alphabet.includes(char) ? alphabet[alphabet.indexOf(char)] = 0 : char)

    alphabet.map((char) => char !== 0 ? result = false : char)

    return result ? "pangram" : "not pangram"
}