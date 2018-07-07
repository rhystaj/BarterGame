const objectsEqual = require('../BarterLogic/Util/objectsEqual');


//objectsEqual
test('objectsEqual returns true for equal primitives', () => {
    expect(objectsEqual(1,1)).toBeTruthy();
    expect(objectsEqual("Word", "Word")).toBe(true);
});

test('objectsEqual returns false for unequal primitives.', () => {
    expect(objectsEqual(1, 5)).toBe(false);
    expect(objectsEqual("One", "File")).toBe(false)
    expect(objectsEqual(1, "One")).toBe(false);
});

const arr1 = ['a', 'b', 'c'];
const arr2 = ['a', 'b', 'c'];
const arr3 = ['a', 'b', 'c', 'd'];
test('objectsEquals works correctly on arrays.', () => {
    expect(objectsEqual(arr1, arr2)).toBe(true);
    expect(objectsEqual(arr1, arr3)).toBe(false);
});

const obj1 = {a:1, b:"Two"};
const obj2 = {a:1, b:"Two"};
const obj3 = {one:1, two:obj1, three:arr1};
const obj4 = {one:1, two:obj2, three:arr2};
test('objectsEqual return true for equal complex objects', () => {
   expect(objectsEqual(obj1, obj2)).toBe(true); 
   expect(objectsEqual(obj3, obj4)).toBe(true);
});

const obj5 = {a:2, b:"Two"};
const obj6 = {one:1, two:obj5, three:arr2};
const obj7 = {a:2, c:"Two"};
const obj8 = {one:1, two:obj1, three:arr3};
test("objectsEqual will return false for objects that aren't equal.", () => {
    expect(objectsEqual(obj1, obj5)).toBe(false);
    expect(objectsEqual(obj3, obj6)).toBe(false);
    expect(objectsEqual(obj1, obj7)).toBe(false);
    expect(objectsEqual(1, obj1)).toBe(false);
    expect(objectsEqual("One", obj1)).toBe(false);
    expect(objectsEqual(obj1, obj8)).toBe(false);
});

