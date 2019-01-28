// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = integer => {
  return function(fare) { return fare * integer; }
}

const fareDoubler = fare => {
  return createFareMultiplier(2)(fare);
}

const fareTripler = fare => {
  return createFareMultiplier(3)(fare);
}

const fetchSpecifiedDrivers = (drivers, callback) => {
  return callback(drivers);
}
