var isPowerOfTwo = function (n) {
  if (n <= 0) return false
  return (n & (n - 1)) === 0
}

console.log(isPowerOfTwo(1)) //true
console.log(isPowerOfTwo(16)) //true
console.log(isPowerOfTwo(3)) //false
console.log(isPowerOfTwo(8)) //true
