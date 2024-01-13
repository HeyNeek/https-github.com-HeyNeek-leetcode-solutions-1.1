/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    //initialize startValue to 1, since the startValue can never be below 1
    let startValue = 1;
    
    /*initialize the runningTotal to be the value of startValue, as this is the variable we will use to keep
    track of whether or not this runningTotal ever dips below 1 when having all of the elements of nums added
    to it*/
    let runningTotal = startValue;
    
    /*we start a while loop that checks if currentNum runs while startValue is less than or equal to
    10k(arbitrary number that passed test cases since problem didnt explicitly give me a limit)*/
    while(startValue <= 10000){
        
        /*create for loop that adds our runningTotal variable to every element in the nums array, and every
        iteration checks if the runningTotal ever is below 1, if it is we break free from the for loop*/
        for(let i = 0; i < nums.length; i++){
            runningTotal += nums[i];
            
            if(runningTotal < 1){
                break;
            }
        }
        
        /*here we have a simple if/else conditionial statement that checks if the runningTotal after being done
        with the for loop above is still above 0, if so we will return the current startValue. If not, in the
        else block we will first increment the startValue variable by 1 and then initialize the runningTotal
        variable to the new value of startValue*/
        if(runningTotal > 0){
            return startValue;
        }else{
            startValue++;
            runningTotal = startValue;
        }
    }
};