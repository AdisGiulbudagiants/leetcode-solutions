/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0
  }
  let uniqueCount = 1
  let currentIndex = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[currentIndex] = nums[i]
      uniqueCount++
      currentIndex++
    }
  }
  return uniqueCount
}

console.log(removeDuplicates([1, 1, 2])) //[1,2]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])) //[0,1,2,3,4]
