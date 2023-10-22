var countDigits = function (num) {
  let result = 0
  const numStr = num.toString()

  for (let i = 0; i < numStr.length; i++) {
    const digit = parseInt(numStr[i])
    if (num % digit === 0) {
      result++
    }
  }

  return result
}

console.log(resultDigits(7)) //1
console.log(resultDigits(54)) //0
console.log(resultDigits(121)) //2
console.log(resultDigits(1248)) //4
