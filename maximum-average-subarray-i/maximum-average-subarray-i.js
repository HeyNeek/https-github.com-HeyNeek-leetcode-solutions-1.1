/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    //initialize currentSum to store the current sum of the Subarray
    let currentSum = 0
    
    //get the sum of the first subarray
    for(let i = 0; i < k; i++){
        currentSum += nums[i]
    }
    
    //initialize the answer by getting the average of the currentSum
    let answer = currentSum / k;    
    
    /*
    Then we need to iterate through the rest of the subarrays. We start the index at where we left off in the
    first for loop above, and add that element to our currentSum and remove the first value at nums[0].
    Then we have a let variable currentAvg inside the for loop that will get the new current average of 
    the currentSum and we will initialize the answer variable with a Math.max comparison between the currentAvg 
    and current answer, if the currentAvg is larger that will be the new answer value
    */
    for (let i = k; i < nums.length; i++) {
        currentSum += nums[i] - nums[i - k];
        let currentAvg = currentSum / k
        answer = Math.max(answer, currentAvg);
    }
    
    return answer;
};