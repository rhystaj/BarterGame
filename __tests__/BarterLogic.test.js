
const createValuedItem = require('../BarterLogic/createValuedItem');
const createProposition = require('../BarterLogic/createProposition')
const evaluateProposition = require('../BarterLogic/evaluateProposition');

const offer1 = [
    createValuedItem('A', 'a', 50),
    createValuedItem('B', 'b', 205),
    createValuedItem('C', 'c', 167)
]

test('Empty proposition should have value 0.', () => {
    expect(evaluateProposition(createProposition([], []))).toBe(0);
})

test("If an NPC gives no items, value should be value of the player's items.", () =>{
    expect(evaluateProposition(createProposition(offer1, []))).toBe(422);
});

test("If player gives no items, value should be negative the NPC's items.", () =>{
    expect(evaluateProposition(createProposition([], offer1))).toBe(-422);
});