function twoSum(nums: number[], target: number): number[] {
    let hashMap = new Map()
    for(let i =0;i<nums.length;i++){
        let diff = target - nums[i]
        if(hashMap.has(diff)){
            const result = [hashMap.get(diff),i]

            return result
        }
        hashMap.set(nums[i],i)
    }
      hashMap.clear()
    return []
};
