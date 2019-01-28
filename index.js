// Code your solution in this file!
const returnFirstTwoDrivers = (function (array) {
  const result = [];
  result.push(array[0], array[1]);
  return result;
});

const returnLastTwoDrivers = (function (array){
  const result = [];
  result.push(array[array.length - 2 ], array[array.length - 1]);
  return result;
});

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integer) {
  return function(fare) {
    return integer * fare;
  }
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function (array, operation) {
  return operation(array);
};
