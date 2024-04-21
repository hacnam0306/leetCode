/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left_pointer = 0
    let right_pointer = height.length - 1
    let res = 0

    while (left_pointer < right_pointer) {
        let width = right_pointer - left_pointer
        let area = Math.min(height[left_pointer], height[right_pointer]) * width
        res = Math.max(area, res)
        if (height[left_pointer] <= height[right_pointer]) {
            left_pointer++
        } else {

            right_pointer--
        }

    }
    return res
};
