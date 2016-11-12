'use strict';

/**
 * Dummy function for testing
 *
 * @param {string} variable Variable
 * @returns {string} Output result of variable check
 */
function ok(variable) {
  if (variable === '2') {
    return 'Error';
  } else {
    return 'Warning';
  }
}

exports.ok = ok;
