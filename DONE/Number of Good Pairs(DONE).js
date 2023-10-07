var numIdenticalPairs = function (nums) {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        result++
      }
    }
  }
  return result
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])) //4
console.log(numIdenticalPairs([1, 1, 1, 1])) //6
console.log(numIdenticalPairs([1, 2, 3])) //0
