var splitWordsBySeparator = function (words, separator) {
  let result = []
  words.map((el) => {
    return el.split(separator).map((el) => {
      result.push(el)
    })
  })
  return result.filter((el) => el !== "")
}

console.log(splitWordsBySeparator(["one.two.three", "four.five", "six"], ".")) //["one","two","three","four","five","six"]
console.log(splitWordsBySeparator(["$easy$", "$problem$"], "$")) //["easy","problem"]
console.log(splitWordsBySeparator(["|||"], "|")) //[]
