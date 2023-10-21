var divide = function (dividend, divisor) {
  let result = Math.trunc(dividend / divisor)
  if (result < Math.pow(-2, 31)) return Math.pow(-2, 31)
  if (result > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1
  return result
}

console.log(divide(-2147483648, -1)) //2147483647
console.log(divide(1, 2)) //0
console.log(divide(10, 3)) //3
console.log(divide(7, -3)) //-2
