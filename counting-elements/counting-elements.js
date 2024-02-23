/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    const sortedArr = arr.sort((a,b) => a-b);
    let count = 0;
    const numMap = new Map();
    
    console.log(sortedArr);
    
    for(let i = 0; i < sortedArr.length; i++){
        if(!numMap.has(arr[i])){
            numMap.set(arr[i], 1);
        }else{
            numMap.set(arr[i], numMap.get(arr[i]) + 1);
        }
    }
    
    console.log(numMap);
    
    for(const [key, value] of numMap){
        if(numMap.has(key + 1)){
            count += value;
        }
    }
    
    return count;
};