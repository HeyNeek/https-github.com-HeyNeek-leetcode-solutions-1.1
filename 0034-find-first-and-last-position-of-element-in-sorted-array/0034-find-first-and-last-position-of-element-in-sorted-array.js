/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let positionArr = [-1,-1];
    let firstPosition = undefined;
    let lastPosition = undefined;
    
    if(!nums.includes(target)){
        return positionArr;
    }
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target && firstPosition === undefined){
            firstPosition = i;
            lastPosition = i;
        }
        
        if(nums[i] === target && firstPosition !== undefined){
            lastPosition = i;
        }
    }
    
    positionArr[0] = firstPosition;
    positionArr[1] = lastPosition;
    
    return positionArr;
};