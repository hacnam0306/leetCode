/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let start = 0
    let end = 0
    for (let i = 0; i < s.length; i++) {
        const flag1 = expandAroundCenter(s, i, i)
        const flag2 = expandAroundCenter(s, i,i + i)
        const currentLen = Math.max(flag1, flag2)
        if (currentLen > end - start) {
            start = i - Math.floor((currentLen - 1) / 2);
            end = start + currentLen;
        }
    }
    return s.substring(start, end);
};
function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--
        right++
    }
    return right - left - 1
}
