function FindIntersection(strArr) {
  const [s1, s2] = strArr;
  const arr1 = s1.split(',').map((s) => s.trim());
  const arr2 = s2.split(',').map((s) => s.trim());

  const intersection = arr1.filter((item) => arr2.includes(item));

  return intersection.length > 0 ? intersection.join(',') : 'false';
}

// keep this function call here
// @ts-ignore
console.log(FindIntersection(readline()));
