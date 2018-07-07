/**
 * Determines wheter two objects are equal by recursively comparing thier inner values - i.e. a deep equals.
 * @param {*} a 
 * @param {*} b 
 */
function objectsEqual(a, b){
    
    if(a === b) {return true}


    /* If both are strings, but not equal, this function would just endlessly recurse unless explicity told to stop. */
    if(typeof(a) === 'string' && typeof(b) === 'string'){
        return false
    }


    /* Get Keys from both objects, if there are any */
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);


    if(aKeys.length !== bKeys.length) { return false; }
    if(aKeys.length <= 0) { return false }


    /* Compare each of the values in the objects, and determine that objects are equals, if all thier key values are equal. */
    aKeys.forEach(key => {
        if(!objectsEqual(a[key], b[key])) { return false; }
    });
    return true;

}
module.exports = objectsEqual;