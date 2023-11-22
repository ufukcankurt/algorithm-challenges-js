/**
 * The function calculates the maximum number of chocolates that can be eaten given the amount of
 * money, the cost of each chocolate, and the number of wrappers needed to exchange for a free
 * chocolate.
 * @param n - The total amount of money the person has to spend on chocolates.
 * @param c - The parameter `c` represents the cost of a single chocolate bar in dollars.
 * @param m - The parameter `m` represents the number of wrappers needed to exchange for a free
 * chocolate.
 * @returns The function `chocolateFeast` returns the total number of chocolates that can be eaten.
 */

function chocolateFeast(n, c, m) {
  let chocolates = Math.floor(n / c);

  let wrappers = chocolates;

  while (wrappers >= m) {
    let freeChocolates = Math.floor(wrappers / m);
    chocolates += freeChocolates;

    wrappers = (wrappers % m) + freeChocolates;
  }

  return chocolates;
}
