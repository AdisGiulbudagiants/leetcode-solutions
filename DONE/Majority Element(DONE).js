var majorityElement = function (nums) {
  nums.sort()

  return nums[Math.floor(nums.length / 2)]
}

console.log(majorityElement([3, 2, 3])) //3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])) //2
