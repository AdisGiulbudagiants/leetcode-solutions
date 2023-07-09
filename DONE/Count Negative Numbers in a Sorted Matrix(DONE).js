var countNegatives = function (grid) {
  let result = 0
  grid.forEach((el) => {
    el.forEach((el) => {
      if (el < 0) return (result += 1)
    })
  })
  return result
}

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
) //8

console.log(
  countNegatives([
    [3, 2],
    [1, 0],
  ])
) //0
