/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let numMap = new Map();
    
    for(let i = 0; i < nums.length; i++){
        if(!numMap.has(nums[i])){
            numMap.set(nums[i], 1);
        }else{
            numMap.set(nums[i], numMap.get(nums[i]) + 1);
        }
    }
        
    let greatestValue = Math.max(...numMap.values());
    
    let answerArr = [];
    
    for(let i = 0; i < greatestValue; i++){
        answerArr[i] = [];
    }
    
    for(let [key, value] of numMap){
        for(let i = 0; i < value; i++){
            if(!answerArr[i].includes(key)){
                answerArr[i].push(key);
            }
        }
    }
    
    return answerArr;
};