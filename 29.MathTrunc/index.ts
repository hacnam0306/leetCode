/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const  quotient = Math.trunc(dividend /divisor )
    if(quotient > Math.pow(2,31) - 1){
        return Math.pow(2,31) - 1
    }
    if( quotient < Math.pow(-2,31)){
        return Math.pow(-2,31)
    }

    return quotient
};
