const objectsEqual = require('./objectsEqual');

/**
 * Uses deep equals to return the index of the given item in the given array.
 * 
 * Returns -1 if item is not there.
 * @param {*} item 
 * @param {*} arr 
 */
function findIndexOf(item, arr){

    for(let i = 0; i < arr.length; i++){
        if(objectsEqual(item, arr[i])){
            return i;
        }
    }

    return -1;

}
module.exports = findIndexOf;