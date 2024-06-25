/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let runningTotal = 0;
    let currentNum = Math.max(...nums);
    
    for(let i = 0; i < k; i++){
        runningTotal += currentNum;
        
        currentNum += 1;
    }
    
    return runningTotal;
};