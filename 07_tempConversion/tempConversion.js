const ftoc = function(fValue) {
let answer = (fValue -32)*(5/9)
return Math.round(answer * 10) / 10
};

const ctof = function(cValue) {
  let answer = (cValue * (9/5)) + 32
  return Math.round(answer * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
