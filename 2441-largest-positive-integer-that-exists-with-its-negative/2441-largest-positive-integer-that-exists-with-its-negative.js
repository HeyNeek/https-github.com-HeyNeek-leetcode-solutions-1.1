/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let numMap = new Map();
    
    for(let i = 0; i < nums.length; i++){
        if(!numMap.has(nums[i])){
            numMap.set(nums[i], 1);
        }
    }
    
    let answerArr = [];
    
    for(let [key, value] of numMap){ 
        if(key < 0 && numMap.has(Math.abs(key))){
            answerArr.push(Math.abs(key));
        }
    }
    
    if(answerArr.length > 0){
        return Math.max(...answerArr);
    }
    
    return -1;
};