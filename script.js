// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon 
// 1 kilogram = 2.204 pound 

function metricToImperial(x) {
  let toFeet = x * 3.281;
  let toGallon = x * 0.264;
  let toPound = x * 2.204;
  
  console.log(toFeet, toGallon, toPound);
}

metricToImperial(5);


function imperialToMetric(y) {
  let toMeter = y / 3.281;
  let toLiter = y / 0.264;
  let toKG = y / 2.204;
  
  console.log(toMeter, toLiter, toKG)
}

imperialToMetric(10)