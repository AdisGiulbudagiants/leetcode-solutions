var findComplement = function (num) {
  const binary = num.toString(2)
  let result = ""

  for (let i = 0; i < binary.length; i++) {
    result += binary[i] === "1" ? "0" : "1"
  }
  return parseInt(result, 2)
}

console.log(findComplement(5)) //2
console.log(findComplement(1)) //0
