/*
 * @Autor: Clairoll
 * @Date: 2021-01-12 11:41:02
 * @LastEditTime: 2021-01-14 10:25:53
 * @Email: 1755033445@qq.com
 * @description: 
 */
// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。


// 示例：

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let newNum = nums.sort((a, b) => a - b)
    let len = nums.length
    let res = newNum[0] + newNum[1] + newNum[2]
    for (let i = 0; i < len; i++) {
        let left = i + 1;
        let right = len - 1
        while (left < right) {
            let Sum = newNum[i] + newNum[left] + newNum[right]
            if (Math.abs(Sum - target) < Math.abs(res-target)) {
                res = Sum
            }
            if (Sum > target) {
                right--
            } else if (Sum < target) {
                left++
            } else {
                return res
            }
        }
    }
    return res
};

console.log(threeSumClosest([-1, 2, 1, -4], 1))