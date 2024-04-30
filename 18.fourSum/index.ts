/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    const ans = [];
    const n = nums.length;

    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            const newTarget = target - nums[i] - nums[j];
            let low = j + 1, high = n - 1;

            while (low < high) {
                const currentSum = nums[low] + nums[high];
                if (currentSum < newTarget) {
                    low++;
                } else if (currentSum > newTarget) {
                    high--;
                } else {
                    ans.push([nums[i], nums[j], nums[low], nums[high]]);
                    while (low < high && nums[low] === nums[low + 1]) low++;
                    while (low < high && nums[high] === nums[high - 1]) high--;
                    low++;
                    high--;
                }
            }
        }
    }

    return ans;
};

