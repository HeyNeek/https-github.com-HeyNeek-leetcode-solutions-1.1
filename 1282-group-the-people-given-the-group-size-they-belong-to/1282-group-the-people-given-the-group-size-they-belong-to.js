/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let groupingMap = new Map();
    
    for(let i = 0; i < groupSizes.length; i++){
        if(!groupingMap.has(groupSizes[i])){
            groupingMap.set(groupSizes[i], [i]);
        }else{
            groupingMap.set(groupSizes[i], [...groupingMap.get(groupSizes[i]), i]);
        }
    }
    
    // console.log(groupingMap);
    
    let answerArr = [];
    
    for(let [key, value] of groupingMap){
        // console.log(typeof key);
        for(let i = 0; i < value.length; i += key){
            answerArr.push(value.slice(i, i + key));
        }
    }
    
    // console.log(answerArr);
    
    return answerArr;
};