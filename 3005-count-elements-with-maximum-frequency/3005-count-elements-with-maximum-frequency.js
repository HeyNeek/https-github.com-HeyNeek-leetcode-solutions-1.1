/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let numMap = new Map();
    
    for(let i = 0; i < nums.length; i++){
        if(!numMap.has(nums[i])){
            numMap.set(nums[i], 1);
        }else{
            numMap.set(nums[i], numMap.get(nums[i]) + 1);
        }
    }
    
    let greatestMaxFrequency = 0;
    
    for(let [key, value] of numMap){
        if(value > greatestMaxFrequency){
            greatestMaxFrequency = value;
        }
    }
    
    let elementCount = 0;
    
    for(let [key, value] of numMap){
        if(value === greatestMaxFrequency){
            elementCount += value;
        }
    }
    
    return elementCount;
};