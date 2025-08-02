function FirstReverse(str) {
  const reversed = str.split('').reverse().join('');

  // code goes here
  return reversed;
}

// keep this function call here
// @ts-ignore
console.log(FirstReverse(readline()));
