/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const sortedNums = nums.slice().sort((a, b) => a - b)

    for (let leftI = 0, rightI = sortedNums.length - 1; leftI < rightI; ) {
        let sum = sortedNums[leftI] + sortedNums[rightI]

        if (sum === target) {
            return [nums.indexOf(sortedNums[leftI]), nums.lastIndexOf(sortedNums[rightI])]
        } else if (sum < target) {
            leftI++
        } else {
            rightI--
        }
    }
};