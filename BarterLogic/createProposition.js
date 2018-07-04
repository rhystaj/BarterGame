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
module.exports = createProposition;