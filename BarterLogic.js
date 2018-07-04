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


/**
 * Specifies items involved within a trade.
 * 
 * @param {"The list of items the player is trading."} playerOffer 
 * @param {"The list of items the NPC is trading."} npcOffer 
 */
function createProposition(playerOffer, npcOffer){
    return Object.freeze({
        playerOffer: playerOffer,
        npcOffer: npcOffer
    });
}

/**
 * Find the total value of the given proposition.
 * 
 * Note: Relative to npc, so a negative value means npc is taking a loss.
 * 
 * @param {*} proposition 
 */
function evaluateProposition(proposition){

    /* Find the total sum of the values of the player's items. */
    let totalPlayerValue = 0;
    proposition.playerOffer.forEach(e => totalPlayerValue += e.value);


    /* Find the total sim of the values of the npc's items*/
    let totalNpcValue = 0;
    proposition.npcOffer.forEach(e => totalNpcValue += e.value);


    return totalNpcValue - totalPlayerValue;

}