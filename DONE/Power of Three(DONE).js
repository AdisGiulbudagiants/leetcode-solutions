var isPowerOfThree = function (n) {
  if (n <= 0) return false
  return Number.isInteger(Math.log10(n) / Math.log10(3))
}

console.log(isPowerOfThree(27)) //true
console.log(isPowerOfThree(0)) //false
console.log(isPowerOfThree(-1)) //false
