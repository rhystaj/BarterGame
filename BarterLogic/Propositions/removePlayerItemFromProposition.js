const createProposition = require('./createProposition');

function removePlayerItemFromProposition(item, proposition, sortingCriteria){

    /* If the item is not contained within the proposition, return it, along with that information.*/
    if(!proposition.playerOffer.includes(item)){
        return Object.freeze({
            objectInOffer: false,
            resultingProposition: proposition
        });
    }


    /* Create a new immutable array that is the result of removing the item from the player's offer. */
    const newPlayerOffer = Array.from(proposition.playerOffer);
    newPlayerOffer.splice(newPlayerOffer.indexOf(item), 1);
    Object.freeze(newPlayerOffer);


    /* Create the new proposition and return it along with that the given item was in the proposition. */
    const newProposition = createProposition(newPlayerOffer, propsition.npcOffer);
    return Object.freeze({
        objectInOffer: true,
        resultingProposition: newProposition
    });

}