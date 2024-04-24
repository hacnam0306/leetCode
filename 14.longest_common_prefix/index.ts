/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let firstItem = strs[0]
    let firstLength = firstItem.length

    for(let i = 1;i<strs.length;i++){
      let s = strs[i]
      while(firstItem !== s.substring(0,firstLength)){
        firstLength--
        if(firstLength ===0){
          return ''
        }
        firstItem = firstItem.substring(0,firstLength)
      }
    }
    return firstItem
};:wq
`





















