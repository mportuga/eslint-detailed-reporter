'use strict';

function addOne(i) {
  if (!isNaN(i)) {
    return i++
  } else {
    return NaN
  }
}

exports.addOne = addOne;
