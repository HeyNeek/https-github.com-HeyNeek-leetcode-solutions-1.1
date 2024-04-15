/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    // let sortedArr = nums.sort((a,b) => a-b);
    
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== min && nums[i] !== max){
            return nums[i];
        }
    }
    
    return -1;
};