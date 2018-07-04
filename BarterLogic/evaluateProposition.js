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


    return totalPlayerValue - totalNpcValue;

}
module.exports = evaluateProposition;