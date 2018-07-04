const createProposition = require('../BarterLogic/createProposition')
const evaluateProposition = require('../BarterLogic/evaluateProposition');

test('Empty proposition should have value 0.', () => {
    expect(evaluateProposition(createProposition([], []))).toBe(0);
})

test('')