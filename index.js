// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
  const twoDrivers = drivers.slice(0, 2);
  return twoDrivers;
};

const returnLastTwoDrivers = function(drivers) {
  const lastTwoDrivers = drivers.slice(-2);
  return lastTwoDrivers;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integer) {
  return function(fare) {
    return fare * integer;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function(drivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(drivers);
};
