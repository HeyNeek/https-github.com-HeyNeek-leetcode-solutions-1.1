/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    const numMap = new Map();
    
    let highestNum = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(!numMap.has(nums[i])){
            numMap.set(nums[i], 1);
        }else{
            numMap.set(nums[i], numMap.get(nums[i]) + 1);
        }
    }
    
    for (const [key, value] of numMap) {
        if (key > highestNum && value === 1) {
            highestNum = key;
        }
    }
    
    if(highestNum === 0){
        return -1;
    }
    
    return highestNum;
};