function getDayNumber(startDate) {
  const msPerDay = 24 * 60 * 60 * 1000;

  const today = new Date();
  const start = new Date(startDate);

  // Normalize both to UTC midnight
  const utcToday = Date.UTC(
    today.getUTCFullYear(),
    today.getUTCMonth(),
    today.getUTCDate()
  );

  const utcStart = Date.UTC(
    start.getUTCFullYear(),
    start.getUTCMonth(),
    start.getUTCDate()
  );

  return Math.floor((utcToday - utcStart) / msPerDay) + 1;
}

module.exports = getDayNumber;