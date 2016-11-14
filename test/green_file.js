'use strict';

function addOne(i) {
    if (!isNaN(i)) {
        return i++;
    }
    return NaN;
}

exports.addOne = addOne;
