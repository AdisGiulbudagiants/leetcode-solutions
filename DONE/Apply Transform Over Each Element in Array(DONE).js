var map = function (arr, fn) {
  return arr.map(fn)
}

console.log(
  map([1, 2, 3], function plusone(n) {
    return n + 1
  })
) //[2,3,4]
