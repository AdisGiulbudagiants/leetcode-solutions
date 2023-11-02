var reduce = function (nums, fn, init) {
  return nums.reduce(fn, init)
}

console.log(
  reduce(
    [1, 2, 3, 4],
    function sum(accum, curr) {
      return accum + curr
    },
    0
  )
) //10
