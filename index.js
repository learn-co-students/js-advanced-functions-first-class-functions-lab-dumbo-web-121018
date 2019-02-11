// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
  let newArray = []
  newArray = array.slice(0,2)
  return newArray
}

const returnLastTwoDrivers = function(array){
  let newArray = []
  newArray = array.slice(-2)
  return newArray
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(integer){
  return function (fare){
    return fare * integer
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(drivers,returnFirstTwoDrivers){
  return returnFirstTwoDrivers(drivers)
}
