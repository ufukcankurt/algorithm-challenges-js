/**
 * The function `timeInWords` takes in an hour `h` and a minute `m` and returns the time in words.
 * @param h - The hour of the day in 24-hour format (0-23).
 * @param m - The parameter `m` represents the minutes in the time.
 * @returns The function `timeInWords` returns a string that represents the time in words.
 */
function timeInWords(h, m) {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
  ];

  if (m === 0) {
    return `${numbers[h]} o' clock`;
  } else if (m === 1) {
    return `one minute past ${numbers[h]}`;
  } else if (m === 59) {
    return `one minute to ${numbers[(h % 12) + 1]}`;
  } else if (m === 15) {
    return `quarter past ${numbers[h]}`;
  } else if (m === 45) {
    return `quarter to ${numbers[(h % 12) + 1]}`;
  } else if (m === 30) {
    return `half past ${numbers[h]}`;
  } else if (m <= 30) {
    return `${numbers[m]} minutes past ${numbers[h]}`;
  } else {
    return `${numbers[60 - m]} minutes to ${numbers[(h % 12) + 1]}`;
  }
}
