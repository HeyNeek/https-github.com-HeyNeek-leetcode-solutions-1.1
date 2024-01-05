/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    //initialize answerArray with the first element in nums being the first element
    let answerArray = [nums[0]]
    
    //create a for loop that starts one element ahead in the nums array, and every iteration
    //we then push current element of nums + the previous element of answerArray into the answerArray
    for(let i = 1; i < nums.length; i++){
        answerArray.push(nums[i] + answerArray[i - 1])
    }
    
    return answerArray
};