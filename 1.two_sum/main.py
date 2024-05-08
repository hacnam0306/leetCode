class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numSet = {}
        n = len(nums)
        for i in range(n):
            remain = target - nums[i]
            if remain in numSet:
                return [numSet[remain],i]
            numSet[nums[i]] = i
        return []
        
