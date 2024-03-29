var maximumWealth = function (accounts) {
  let sum = accounts.map((el) => {
    return el.reduce((acc, cur) => acc + cur)
  })

  return Math.max.apply(null, sum)
}

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
) //6

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
) //10

console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
) //17
