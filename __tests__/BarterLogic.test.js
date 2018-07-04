
const createValuedItem = require('../BarterLogic/createValuedItem');
const createProposition = require('../BarterLogic/createProposition')
const evaluateProposition = require('../BarterLogic/evaluateProposition');

const offer1 = [
    createValuedItem('A', 'a', 50),
    createValuedItem('B', 'b', 205),
    createValuedItem('C', 'c', 167)
]
const offer2 = [
    createValuedItem('A', 'a', 156),
    createValuedItem('B', 'b', 8),
    createValuedItem('C', 'c', 12),
    createValuedItem('D', 'd', 59)
];

test('Empty proposition should have value 0.', () => {
    expect(evaluateProposition(createProposition([], []))).toBe(0);
})

test("If an NPC gives no items, value should be value of the player's items.", () =>{
    expect(evaluateProposition(createProposition(offer1, []))).toBe(422);
});

test("If player gives no items, value should be negative the NPC's items.", () =>{
    expect(evaluateProposition(createProposition([], offer1))).toBe(-422);
});

test("Propositions are evaluated correctly.", () => {
    expect(evaluateProposition(createProposition(offer1, offer2))).toBe(187);
    expect(evaluateProposition(createProposition(offer2, offer1))).toBe(-187);
});

test("If two offers have the same value, the proposition value should be 0", () => {
    expect(evaluateProposition(createProposition(offer2, [createValuedItem('E', 'e', 235)]))).toBe(0);
});