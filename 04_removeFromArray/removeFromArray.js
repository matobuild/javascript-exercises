const removeFromArray = function (sampleArray, value1, value2, value3, value4) {
  const values = [value1, value2, value3, value4];

  function getIndexAndRemove(atValue) {
    let index = sampleArray.indexOf(atValue);
    if (index > -1) {
      sampleArray.splice(index, 1);
    }
  }

  for (value of values) {
    if (value !== undefined) {
      getIndexAndRemove(value);
    }
  }

  return sampleArray;
};

// Do not edit below this line
module.exports = removeFromArray;
