var findNonMinOrMax = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const max = nums.sort((a, b) => a - b)[nums.length - 1]
    if (nums.length === 1) return -1
    return nums.sort((a, b) => a - b)[0 + 1] !== max
      ? nums.sort((a, b) => a - b)[0 + 1]
      : -1
  }
}

console.log(findNonMinOrMax([2, 4, 25])) //4
console.log(findNonMinOrMax([1])) //-1
console.log(findNonMinOrMax([3, 2, 1, 4])) //2
console.log(findNonMinOrMax([1, 2])) //-1
console.log(findNonMinOrMax([2, 1, 3])) //2
