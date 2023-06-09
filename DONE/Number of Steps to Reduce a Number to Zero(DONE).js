var numberOfSteps = function (num) {
  let res = 0
  while (num !== 0) {
    if (num % 2 === 0) {
      num /= 2
    } else {
      num -= 1
    }
    res++
  }
  return res
}

console.log(numberOfSteps(14)) //6
console.log(numberOfSteps(8)) //4
console.log(numberOfSteps(123)) //12
