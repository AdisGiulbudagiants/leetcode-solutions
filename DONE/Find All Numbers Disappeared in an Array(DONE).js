var findDisappearedNumbers = function (nums) {
  const res = []
  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i])
    nums[num - 1] = -Math.abs(nums[num - 1])
  }
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] > 0) {
      res.push(j + 1)
    }
  }
  return res
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])) //[5,6]
console.log(findDisappearedNumbers([1, 1])) //[2]
