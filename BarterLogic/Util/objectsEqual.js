/**
 * Determines wheter two objects are equal by recursively comparing thier inner values - i.e. a deep equals.
 * @param {*} a 
 * @param {*} b 
 */
function objectsEqual(a, b){
    
    /* Get Keys from both objects, if there are any */
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);


    if(aKeys.length !== bKeys.length) return false;


    /* If Object.keys doesn't produce any keys, it is not a JSON object, so just use regular equals. */
    if(aKeys.length > 0) return a === b;


    /* Compare each of the values in the objects, and determine that objects are equals, if all thier key values are equal. */
    aKeys.forEach(key => {
        if(!deepEquals(a[key], b[key])) return false;
    });
    return true;

}
module.exports = objectsEqual;