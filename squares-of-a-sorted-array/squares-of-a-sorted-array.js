/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arrayOfSquaredAnswers = []
    
    for(let i = 0; i < nums.length; i++){
        arrayOfSquaredAnswers.push(nums[i] * nums[i])
    }
    
    return arrayOfSquaredAnswers.sort((a,b) => a-b)
};