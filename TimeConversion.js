/**
 * The timeConversion function converts a time string from 12-hour format to 24-hour format.
 * @param s - The parameter `s` is a string representing a time in 12-hour format. It should be in the
 * format "hh:mm:ssAM" or "hh:mm:ssPM", where "hh" represents hours in 12-hour format, "mm" represents
 * minutes, "ss" represents seconds,
 * @returns a string in the format "HH:MM:SS", which represents the time in 24-hour format.
 */

function timeConversion(s) {
  // Separating hours, minutes and seconds
  let [hours, minutes, seconds] = s.slice(0, 8).split(":");
  const period = s.slice(8); // AM or PM

  // Convert 12-hour format to 24-hour format
  if (period === "PM" && hours !== "12") {
    hours = String(parseInt(hours, 10) + 12);
  } else if (period === "AM" && hours === "12") {
    hours = "00";
  }

  return `${hours}:${minutes}:${seconds}`;
}
