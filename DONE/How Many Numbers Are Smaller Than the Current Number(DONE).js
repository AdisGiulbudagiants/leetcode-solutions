var smallerNumbersThanCurrent = function (nums) {
  const res = Array(nums.length).fill(0)
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[j] < nums[i]) res[i]++
    }
  }
  return res
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])) //[4,0,1,1,3]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])) //[2,1,0,3]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])) //[0,0,0,0]
