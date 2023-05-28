var reverse = function (x) {
  let res = parseInt(x.toString().split("").reverse().join(""))
  if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) return 0
  if (x < 0) res = -res
  return res
}

console.log(reverse(-123)) //-321
