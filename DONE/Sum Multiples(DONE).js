var sumOfMultiples = function (n) {
  let res = []
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
      res.push(i)
    }
  }
  if (res.length === 0) return 0
  return res.reduce((acc, cur) => acc + cur)
}

console.log(sumOfMultiples(1)) //
console.log(sumOfMultiples(7)) //21
console.log(sumOfMultiples(10)) //40
