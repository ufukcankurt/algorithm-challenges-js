function getSneakyNumbers(nums: number[]): number[] {
  let duplicate = nums.filter((value, index) => nums.indexOf(value) !== index && nums.lastIndexOf(value) === index);

  return duplicate;
}
