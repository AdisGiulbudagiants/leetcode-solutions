var singleNumber = function (nums) {
  return nums.reduce((acc, cur) => acc ^ cur)
}

console.log(singleNumber([2, 2, 1])) //1
console.log(singleNumber([4, 1, 2, 1, 2])) //4
console.log(singleNumber([1])) //1
