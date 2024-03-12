
var angleClock = function(hour, minutes) {
  const hourAngle = (30 * hour) + (0.5 * minutes);
  const minuteAngle = minutes * 6;
  const innerAngle = Math.abs(hourAngle - minuteAngle);
  const outerAngle = 360 - Math.abs(hourAngle - minuteAngle);
  return Math.min(innerAngle, outerAngle)
};

console.log(angleClock(12,30));












const clockAngle = (hour, min) => {

  const anglePerMinute = min * (360 / 60); // count the angle per each minute
  const anglePerHour = (hour * (360 / 12)) + (min * (30 / 60)); // each hour the angle changes to 30 degrees; each minute adds 0.5 angle to the hour (30 / 60 that is)
  return Math.abs(360 - (anglePerHour - anglePerMinute)); // this is the outer angle, the inner angle is hors - mins 
};

console.log(clockAngle(13, 0)); 


// extra two sum
function twoSum(arr, target){
  for (let i = 0; i <= arr.length; i++){
    for (let j = 0; j <= arr.length; j++){
      if (arr[i] + arr[j + 1] === target) return [i, j+1]
    }
  }
};

console.log(twoSum([2,7,11,15], 9));
