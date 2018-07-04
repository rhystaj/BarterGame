/**
 * Create an item with an assigned value to be used within a barter.
 * 
 * @param {"The name of the object, as referred to in game."} name 
 * @param {"A description of the object, as displayed in game."} description 
 * @param {"The relative numerical value of the object - not displayed in game."} value 
 */
function createValuedItem(name, description, value) {
    return Object.freeze({
        name: name, 
        description: description, 
        value: value
    });
}
module.exports = createValuedItem;