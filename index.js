// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(drivers.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (num1) {
  return (num2) => num1 * num2
}

function fareDoubler (fare) {
  return createFareMultiplier(2)(fare)
}

function fareTripler (fare) {
  return createFareMultiplier(3)(fare)
}

function fetchSpecifiedDrivers (drivers, func) {
  return func(drivers)
}
