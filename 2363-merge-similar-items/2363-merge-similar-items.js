/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    let itemMap = new Map();
    
    for(let i = 0; i < items1.length; i++){
        if(!itemMap.has(items1[i][0])){
            itemMap.set(items1[i][0], items1[i][1]);
        }
    }
    
     for(let i = 0; i < items2.length; i++){
        if(!itemMap.has(items2[i][0])){
            itemMap.set(items2[i][0], items2[i][1]);
        }else{
            itemMap.set(items2[i][0], itemMap.get(items2[i][0]) + items2[i][1]);
        }
    }
    
    let answerArr = [];
    
    for(let [key, value] of itemMap){
        answerArr.push([key, value]);
    }
    
    return answerArr.sort((a,b) => a[0] - b[0]);
};