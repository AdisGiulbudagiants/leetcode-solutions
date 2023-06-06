var addDigits = function (num) {
  return num === 0 ? 0 : ((num - 1) % 9) + 1
}

console.log(addDigits(38)) //2
console.log(addDigits(0)) //0
