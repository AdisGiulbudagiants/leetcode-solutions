function twoSum(nums, target) {
  const numMap = []

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]

    if (numMap.hasOwnProperty(complement)) {
      return [numMap[complement], i]
    }
    numMap[nums[i]] = i
  }
  return []
}

console.log(twoSum([2, 7, 11, 15], 9))
