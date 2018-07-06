
const createValuedItem = require('../BarterLogic/createValuedItem');
const createProposition = require('../BarterLogic/Propositions/createProposition')
const evaluateProposition = require('../BarterLogic/evaluateProposition');
const addPlayerItemToProposition = require('../BarterLogic/Propositions/addPlayerItemToProposition');
const removePlayerItemFromProposition = require('../BarterLogic/Propositions/removePlayerItemFromProposition');

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


//evaluateProposition
test('Empty proposition should have value 0.', () => {
    expect(evaluateProposition(createProposition([], []))).toBe(0);
})

test("If an NPC gives no items, value should be value of the player's items.", () => {
    expect(evaluateProposition(createProposition(offer1, []))).toBe(422);
});

test("If player gives no items, value should be negative the NPC's items.", () => {
    expect(evaluateProposition(createProposition([], offer1))).toBe(-422);
});

test("Propositions are evaluated correctly.", () => {
    expect(evaluateProposition(createProposition(offer1, offer2))).toBe(187);
    expect(evaluateProposition(createProposition(offer2, offer1))).toBe(-187);
});

test("If two offers have the same value, the proposition value should be 0", () => {
    expect(evaluateProposition(createProposition(offer2, [createValuedItem('E', 'e', 235)]))).toBe(0);
});


//addPlayerItemToProposition
const expectedPlayerOfferAfterAdd = Array.from(offer1);
expectedPlayerOfferAfterAdd.push(createValuedItem('N', 'n', 120));
Object.freeze(expectedPlayerOfferAfterAdd);

test('Given item is added to the given proposition.', () => {
    let expectedProposition = createProposition(expectedPlayerOfferAfterAdd, offer2);
    expect(addPlayerItemToProposition(createValuedItem('N', 'n', 120), createProposition(offer1, offer2), () => false)).toEqual(expectedProposition);
});

const expectedPlayerOfferAfterAddSorted = Array.from(expectedPlayerOfferAfterAdd);
expectedPlayerOfferAfterAddSorted.sort((a, b) => a.value - b.value);
Object.freeze(expectedPlayerOfferAfterAddSorted);

test("The player's offer is correctly sorted after an item is added.", () => {
    let expectedProposition = createProposition(expectedPlayerOfferAfterAddSorted, offer2);
    expect(addPlayerItemToProposition(createValuedItem('N', 'n', 120), createProposition(offer1, offer2), (a, b) => a.value - b.value)).toEqual(expectedProposition);
});


//removePlayerItemFromProposition
test("False and the unmodified proposition will be returned if an item to be removed from a player's offer is not there.", () => {
    expect(removePlayerItemFromProposition(createValuedItem('N', 'n', 120), createProposition(offer1, offer2), (a,b) => 0)).toEqual({
        itemInOffer: false,
        resultingProposition: createProposition(offer1, offer2)
    });
});

const expectedPlayerOfferAfterRemove = [
    createValuedItem('A', 'a', 50),
    createValuedItem('C', 'c', 167)
];

test("True and the modified proposition will be returned when an item is sucessfully removed from a player's offer.", () => {
    let expectedProposition = createProposition(expectedPlayerOfferAfterRemove, offer2);
    expect(removePlayerItemFromProposition(createValuedItem('B', 'b', 205), createProposition(offer1, offer2), (a,b) => 0)).toEqual({
        itemInOffer: true,
        resultingProposition: expectedProposition
    });
});