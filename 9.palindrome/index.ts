/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false
    }
    let reverse = 0
    let temp = x
    while(temp!=0){
        let res = temp % 10
        reverse = reverse * 10 + res
        temp =    ~~(temp / 10);

    }
    return x === +reverse
};

