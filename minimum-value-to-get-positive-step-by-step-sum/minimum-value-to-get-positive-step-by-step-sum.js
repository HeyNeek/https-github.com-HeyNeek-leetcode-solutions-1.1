/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let currentNum = 1;
    let runningTotal = currentNum;
    
    while(currentNum <= 10000){
        for(let i = 0; i < nums.length; i++){
            runningTotal += nums[i];
            // console.log("runningTotal: ", runningTotal)
            
            if(runningTotal < 1){
                // console.log("ALERT it hit less than 1, breaking for loop");
                break
            }
        }
        
        if(runningTotal > 0){
            return currentNum
        }else{
            currentNum++;
            // console.log("currentNum now: ", currentNum)
            runningTotal = currentNum;
        }
    }
};