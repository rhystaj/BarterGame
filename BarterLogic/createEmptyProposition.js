const createProposition = require('./createProposition');

/**
 * Create a proposition with no items.
 */
const createEmptyProposition = () => createProposition([], []);
module.exports = createEmptyProposition;