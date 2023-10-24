var isSameAfterReversals = function (num) {
  const reversed = num.toString().split("").reverse().join("")
  const doubleReversed = Number(reversed)
    .toString()
    .split("")
    .reverse()
    .join("")

  return Number(doubleReversed) === num
}

console.log(isSameAfterReversals(526)) //true
console.log(isSameAfterReversals(1800)) //false
console.log(isSameAfterReversals(0)) //true
