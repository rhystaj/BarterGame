const objectsEqual = require('../BarterLogic/Util/objectsEqual');
const findIndexOf = require('../BarterLogic/Util/findIndexOf');


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


//findIndexOf
test('findIndexOf works on arrays of primitives.', () => {
    expect(findIndexOf(3, [5, 2, 3, 5, 7])).toBe(2);
    expect(findIndexOf('a', ['q', 'a', '7'])).toBe(1);
});

test('findIndexOf works on arrays of more complex items.', () => {
    expect(findIndexOf(obj1, [obj3, obj8, obj2, arr3, obj7])).toBe(2);
});

test("findIndexOf returns -1 if item is not in array.", () => {
    expect(findIndexOf(obj1, [obj3, obj8, arr3, obj7])).toBe(-1);
});
