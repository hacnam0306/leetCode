/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const arr = nums1.concat(nums2).sort((a,b) => a - b)
    const mid = Math.ceil((arr.length - 1) / 2)

    if(arr.length % 2 !== 0){
        return arr[mid]
    }
    return (arr[mid] + arr[mid -1]) / 2
    
};

