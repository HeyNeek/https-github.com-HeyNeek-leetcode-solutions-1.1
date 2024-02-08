/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const highestNum = Math.max(...nums);
    
    const numsSet = new Set(nums);
    
    if(!numsSet.has(0)){
        return 0;
    }
    
    for(let i = highestNum; i > 0; i--){
        if(!numsSet.has(i)){
            return i;
        }
    }
    
    return highestNum + 1;
};