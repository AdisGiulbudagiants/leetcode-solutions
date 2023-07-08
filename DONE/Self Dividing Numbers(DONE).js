var selfDividingNumbers = function (left, right) {
  const result = []

  for (let num = left; num <= right; num++) {
    let currentNum = num
    let isSelfDividing = true

    while (currentNum > 0) {
      const digit = currentNum % 10

      if (digit === 0 || num % digit !== 0) {
        isSelfDividing = false
        break
      }

      currentNum = Math.floor(currentNum / 10)
    }

    if (isSelfDividing) {
      result.push(num)
    }
  }

  return result
}

console.log(selfDividingNumbers(1, 22)) //[1,2,3,4,5,6,7,8,9,11,12,15,22]
console.log(selfDividingNumbers(47, 85)) //[48,55,66,77]
