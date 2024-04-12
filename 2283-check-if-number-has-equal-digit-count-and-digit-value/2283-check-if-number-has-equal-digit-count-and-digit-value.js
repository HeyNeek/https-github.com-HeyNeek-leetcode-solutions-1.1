/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    let numMap = new Map();
    
    for(let i = 0; i < num.length; i++){
        if(!numMap.has(num[i])){
            numMap.set(num[i], 1);
        }else{
            numMap.set(num[i], numMap.get(num[i]) + 1);
        }
    }
    
    let bool = true;
    
    for(let i = 0; i < num.length; i++){
        const currNum = numMap.get(String(i));
        const currentIndexValue = Number(num[i]);
        
        console.log("index: ", i)
        console.log("currNum: ", currNum)
        
        if(currNum !== currentIndexValue && currNum !== undefined){
            console.log("we are inside the if with index: ", i)
            console.log("we in here because " + currNum + " does not equal " + currentIndexValue)
            bool = false;
            break;
        }
        
        if(currNum === undefined && currentIndexValue > 0){
            bool = false;
            break;
        }
    }
    
    console.log(numMap);
    
    
    return bool;
};