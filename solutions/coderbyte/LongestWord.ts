function LongestWord(sen) {
  const words = sen.match(/[A-Za-z0-9]+/g);
  if (!words) return '';

  let longest = words[0];
  for (let w of words) {
    if (w.length > longest.length) {
      longest = w;
    }
  }
  return longest;
}

// keep this function call here
// @ts-ignore
console.log(LongestWord(readline()));
