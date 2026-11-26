'use strict';

/**
 * Format a greeting for a supplied name.
 *
 * @param {string} name The name to greet, inserted unchanged.
 * @returns {string} The text `Hello, <name>!`.
 */
function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = { greet };
