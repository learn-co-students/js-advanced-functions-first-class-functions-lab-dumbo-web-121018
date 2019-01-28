// Code your solution in this file!
const returnFirstTwoDrivers = function(list){
  return list.slice(0,2);
};

const returnLastTwoDrivers = function(list){
  return list.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){

  return function(fare){
    return integer * fare;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

// fareDoubler(5.80);

// createFareMultiplier(9)(5.80);

function fetchSpecifiedDrivers(list, callback){
  return callback(list);
}
