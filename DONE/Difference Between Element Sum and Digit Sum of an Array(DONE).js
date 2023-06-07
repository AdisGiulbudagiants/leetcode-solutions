var differenceOfSum = function (nums) {
  const elSum = nums.reduce((acc, cur) => acc + cur)
  const digSum = nums
    .toString()
    .split("")
    .filter((el) => el !== ",")
    .reduce((acc, cur) => acc + parseInt(cur), 0)

  return elSum - digSum
}

console.log(differenceOfSum([1, 15, 6, 3])) //9
console.log(differenceOfSum([1, 2, 3, 4])) //0
