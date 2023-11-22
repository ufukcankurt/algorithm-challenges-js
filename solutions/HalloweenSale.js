/**
 * The function calculates the maximum number of games that can be bought with a given budget, starting
 * with a certain price and decreasing by a fixed amount until reaching a minimum price.
 * @param p - The initial price of the game.
 * @param d - d is the amount by which the price of the game decreases after each purchase.
 * @param m - m is the minimum price for a game.
 * @param s - The total amount of money available to spend on games.
 * @returns the total number of games that can be purchased with the given budget.
 */

function howManyGames(p, d, m, s) {
  let totalGames = 0;
  let currentPrice = p;

  while (s >= currentPrice) {
    totalGames++;
    s -= currentPrice;
    currentPrice = Math.max(currentPrice - d, m);
  }

  return totalGames;
}
