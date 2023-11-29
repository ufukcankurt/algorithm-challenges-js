/**
 * The function `countingValleys` counts the number of valleys in a given path by keeping track of the
 * altitude.
 * @param steps - The number of steps taken in the hike.
 * @param path - The `path` parameter is a string representing the path taken. It consists of "U" and
 * "D" characters, where "U" represents an uphill step and "D" represents a downhill step.
 * @returns the number of valleys encountered in the given path.
 */

function countingValleys(steps, path) {
  let valleys = 0;
  let altitude = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      altitude++;
      if (altitude === 0) {
        valleys++;
      }
    } else if (path[i] === "D") {
      altitude--;
    }
  }

  return valleys;
}
