/*
 * @Autor: Clairoll
 * @Date: 2021-01-11 15:07:14
 * @LastEditTime: 2021-01-12 11:02:41
 * @Email: 1755033445@qq.com
 * @description: 
 */
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

//  

// 示例 1：

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 示例 2：

// 输入：nums = []
// 输出：[]
// 示例 3：

// 输入：nums = [0]
// 输出：[]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {
//     let len = nums.length
//     if (len <= 2) return []
//     let newNwm = nums.sort((a, b) => a - b)
//     let res = []
//     for (let i = 0; i < len; i++) {
//         for (let j = i + 1; j < len; j++) {
//             let sum = newNwm[i] + newNwm[j]
//             let index = newNwm.indexOf(0 - sum, j + 1)
//             if (index != -1) {
//                 let item = [newNwm[i], newNwm[j], 0 - sum].sort((a, b) => a - b)
//                 let index2 = 0
//                 let flag = true
//                 while (index2 < res.length) {
//                     if (res[index2][0] == item[0] && res[index2][1] == item[1] && res[index2][2] == item[2]) {
//                         flag = false
//                         break
//                     }
//                     index2++
//                 }

//                 if (flag) {
//                     res.push(item)

//                 }
//             }
//         }
//     }

//     return res
// };


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let len = nums.length
    if (len <= 2) return []
    let newNwm = nums.sort((a, b) => a - b)
    let res = []
    for (let i = 0; i < len; i++) {
        let left = i + 1
        let right = len - 1
        if (newNwm[i] > 0) return res // 因为数组是从小到大，后面数会更大，所以不可能为0
        if (i > 0 && newNwm[i] == newNwm[i - 1]) continue // 去除重复
        while (left < right) {
            let sum = newNwm[left] + newNwm[right] + newNwm[i]
            if (sum == 0) {
                res.push([newNwm[i], newNwm[left], newNwm[right]])
                while (left < right && newNwm[left] == newNwm[left + 1]) left++
                while (left < right && newNwm[right] == newNwm[right - 1]) right--
                left++
                right--
            } else if (sum > 0) {
                right--
            } else {
                left++
            }
        }

    }
    return res
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
