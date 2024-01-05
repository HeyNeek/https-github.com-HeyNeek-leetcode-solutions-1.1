/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    //left pointer variable
    let left = 0
    
    //answer variable to track how long we go without exceeding k-amount of 0's
    let answer = 0
    
    //current variable to make sure there isnt more than k-amount 0's
    let current = 0
    
    //iterate through entire nums array
     for (let right = 0; right < nums.length; right++) {
        //every time index variable right lands on a 0 we will increase current by 1
        if (nums[right] == "0") {
            current++;
        }
        
        /*
        we write a while loop inside that says as long as current is bigger than constraint k
        we will increment left by 1 and everytime left is 0 we subtract current by 1
        */
        while (current > k) {
            if (nums[left] == "0") {
                current -= 1;
            }
            left++;
        }
        
        //at the end of the for loop we compare the current length of the run to the current answer and reassign
        answer = Math.max(answer, right - left + 1);
    }
    
    return answer;
};