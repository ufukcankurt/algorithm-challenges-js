function minimumDistances(a) {
  let minDifference = Infinity;
  const lastIndexMap = new Map();

  for (let i = 0; i < a.length; i++) {
    if (lastIndexMap.has(a[i])) {
      const diff = i - lastIndexMap.get(a[i]);
      minDifference = Math.min(minDifference, diff);
    }
    lastIndexMap.set(a[i], i);
  }

  return minDifference === Infinity ? -1 : minDifference;
}
