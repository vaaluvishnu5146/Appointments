function generateTimeSlots(slots = [], slotDuration = 30) {
  var result = [];

  const getMinutes = (s) => s.slice(0, 2) * 60 + +s.slice(-2);
  const getTime = (m) => new Date(m * 6e4).toJSON().slice(11, 16);

  for (var item of slots) {
    var start = getMinutes(item.startTime),
      end = getMinutes(item.endTime);
    for (var m = start; m <= end - slotDuration; m += slotDuration)
      result.push(getTime(m) + "-" + getTime(m + slotDuration));
  }

  return result;
}

module.exports = {
  generateTimeSlots,
};
