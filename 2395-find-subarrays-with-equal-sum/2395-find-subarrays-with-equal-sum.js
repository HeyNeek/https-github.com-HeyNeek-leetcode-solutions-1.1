/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    let subArrayTotalsMap = new Map();
    
    for(let i = 0; i < nums.length; i++){
        
            let currentSubarraySum = nums[i] + nums[i + 1]
            
            if(!subArrayTotalsMap.has(currentSubarraySum)){
                subArrayTotalsMap.set(currentSubarraySum, 1);
            }else{
                subArrayTotalsMap.set(currentSubarraySum, subArrayTotalsMap.get(currentSubarraySum) + 1);
            }
        
    }
    
    console.log(subArrayTotalsMap)
    
    for(let [key, value] of subArrayTotalsMap){
        if(value > 1){
            return true
        }
    }
    
   
    
    return false
};