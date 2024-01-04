/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let currentSum = 0
    
    for(let i = 0; i < k; i++){
        currentSum += nums[i]
    }
        
    let answer = currentSum / k;    
    
    for (let i = k; i < nums.length; i++) {
        currentSum += nums[i] - nums[i - k];
        let currentAvg = currentSum / k
        answer = Math.max(answer, currentAvg);
    }
    
    return answer;
};