/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    let numMap = new Map();
    
    for(let i = lowLimit; i <= highLimit; i++){
        let currentSum;
        
        if(i < 10){
            currentSum = i;
        }else{
            let numArr = String(i).split("");
            let runningTotal = 0;
            for(let j = 0; j < numArr.length; j++){
                runningTotal += Number(numArr[j]);
            }
            currentSum = runningTotal;
        }
        
        // console.log("currentSum: ", currentSum);
        
        if(!numMap.has(currentSum)){
            numMap.set(currentSum, 1);
        }else{
            numMap.set(currentSum, numMap.get(currentSum) + 1);
        }
    }
    
    // console.log(numMap);
    
    let greatestNumOfBalls = 0;
    
    for(let [key, value] of numMap){
        if(value > greatestNumOfBalls){
            greatestNumOfBalls = value;
        }
    }
    
    return greatestNumOfBalls;
};