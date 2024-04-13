function lengthOfLongestSubstring(s: string): number {
    if(!s) return 0

    let max = 0
    let longest = ''

    for(let i =0;i<s.length;i++){
        let current = s[i]
        const idx = longest.indexOf(current)
        if(idx != -1){
            longest = longest.slice(i + 1).concat(current)
        }else{
            longest += current
            max  = Math.max(max,longest.length)

        }
    }
    return max
};
