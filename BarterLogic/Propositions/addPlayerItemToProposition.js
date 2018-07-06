const createProposition = require('./createProposition');


/**
 * Add the given item to the player's offer in the given proposition, and have it sorted by the given criteria.
 * @param {*} item 
 * @param {*} proposition 
 * @param {*} sortingCriteria 
 */
function addPlayerItemToProposition(item, proposition, sortingCriteria){

    /* Create a copy of the old player array, with the new item added. */
    const newPlayerList = Array.from(proposition.playerOffer);
    newPlayerList.push(item);


    newPlayerList.sort(sortingCriteria);


    return createProposition(newPlayerList, proposition.npcOffer);

}