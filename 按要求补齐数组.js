/*
 * @Autor: Clairoll
 * @Date: 2020-12-30 11:20:38
 * @LastEditTime: 2020-12-30 11:42:34
 * @Email: 1755033445@qq.com
 * @description: 
 */
// 给定一个已排序的正整数数组 nums，和一个正整数 n 。从 [1, n] 区间内选取任意个数字补充到 nums 中，使得 [1, n] 区间内的任何数字都可以用 nums 中某几个数字的和来表示。请输出满足上述要求的最少需要补充的数字个数。

// 示例 1:

// 输入: nums = [1,3], n = 6
// 输出: 1 
// 解释:
// 根据 nums 里现有的组合 [1], [3], [1,3]，可以得出 1, 3, 4。
// 现在如果我们将 2 添加到 nums 中， 组合变为: [1], [2], [3], [1,3], [2,3], [1,2,3]。
// 其和可以表示数字 1, 2, 3, 4, 5, 6，能够覆盖 [1, 6] 区间里所有的数。
// 所以我们最少需要添加一个数字。
// 示例 2:

// 输入: nums = [1,5,10], n = 20
// 输出: 2
// 解释: 我们需要添加 [2, 4]。
// 示例 3:

// 输入: nums = [1,2,2], n = 5
// 输出: 0
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */

// 下面开始说下贪心具体思路：
// 我们一开始认为覆盖区间为空
// 而因为目标区间总是从1开始,所以初始空区间为[1,miss)  miss=1
// 然后我们遍历给定的数组（有序）
// 当 当前遍历到的数组元素(ai)小于等于我们区间右端点
// 说明该元素可以将区间进行扩展,无需我们手动添加元素进行平移，
// 此时区间变化为[1,miss+ai)
// 但是当 当前遍历到的数组元素比区间的右端点还要大时
// 说明我们无法直接扩展覆盖区间,因为我们当前能覆盖的最大数是miss-1
// 所以我们需要自己添加一个数,即将miss这个值加入，因此区间扩展至[1,miss*2)
// 然后循环更新miss,直到覆盖区大于[1,n]
// ps:
// 这道题贪心的点就在与对于一个覆盖区间[1,x)
// 如果我们不得不自己添加一个数来扩展覆盖区间
// 那么我们添加x就可以让覆盖区间扩大2倍(区间扩展最快/长)
// 否则我们就用给出的数组元素进行扩展(需要自己手动添加数字个数最少)
// 而选择一个比x大的元素进行扩展是不可行的
// 因为这样扩展得到的不是一个覆盖区间
// 比如[1,3) 如果选择4进行扩展，则得到的区间包括:[1,3)、4、[5,7) 遗漏了3
var minPatches = function (nums, n) {
    let right = 1;
    let index = 0;
    let result = 0;
    while (right <= n) {
        if ( index < nums.length &&  nums[index] <= right) {
            right += nums[index]
            index++
        } else {
            right += right
            result++
        }
    }

    return result
};

console.log(minPatches([1, 5, 10], 20))
console.log(minPatches([1, 2, 2], 5))
console.log(minPatches([], 7))