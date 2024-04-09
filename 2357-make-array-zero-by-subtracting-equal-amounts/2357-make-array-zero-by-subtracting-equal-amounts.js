/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let stepCount = 0;
    
    while(nums.some(x => x > 0)){
        let filteredArr = nums.filter(nums => nums > 0);
        let minNonZeroNum = Math.min(...filteredArr);
        
        for(let i = 0; i < nums.length; i++){
            if(nums[i] !== 0){
                nums[i] = nums[i] - minNonZeroNum;
            }
        }
        
        stepCount++;
    }
    
    return stepCount;
};