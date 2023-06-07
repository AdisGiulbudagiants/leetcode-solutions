var xorOperation = function (n, start) {
  let res = 0
  for (let i = 0; i < n; i++) {
    const num = start + 2 * i
    res ^= num
  }
  return res
}

console.log(xorOperation(5, 0)) //8
console.log(xorOperation(4, 3)) //8
