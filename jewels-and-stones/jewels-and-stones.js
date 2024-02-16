/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

 /*
    a:1
    A:1
 */
var numJewelsInStones = function(jewels, stones) {
    const m = new Map()

    for(let i = 0; i < jewels.length; i++){
        m.set(jewels[i], 1)
    }

    let accum = 0

    for(let i = 0; i < stones.length; i++){
        if(m.get(stones[i])){
            accum++
        }
    }

    return accum
};