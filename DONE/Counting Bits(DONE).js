var countBits = function (n) {
  return Array.from(
    { length: n + 1 },
    (_, i) => i.toString(2).split("1").length - 1
  )
}

console.log(countBits(2)) //[0,1,1]
console.log(countBits(5)) //[0,1,1,2,1,2]
