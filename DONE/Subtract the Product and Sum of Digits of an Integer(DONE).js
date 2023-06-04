var subtractProductAndSum = function (n) {
  const multiply = n
    .toString()
    .split("")
    .reduce((acc, cur) => acc * Number(cur))
  const sum = n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0)
  return multiply - sum
}

console.log(subtractProductAndSum(234)) //15
console.log(subtractProductAndSum(4421)) //21
