
var angleClock = function(hour, minutes) {
  const hourAngle = (30 * hour) + (0.5 * minutes);
  const minuteAngle = minutes * 6;
  const innerAngle = Math.abs(hourAngle - minuteAngle);
  const outerAngle = 360 - Math.abs(hourAngle - minuteAngle);
  return Math.min(innerAngle, outerAngle)
};

console.log(angleClock(12,30));