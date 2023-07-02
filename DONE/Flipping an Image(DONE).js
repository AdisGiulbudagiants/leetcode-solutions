var flipAndInvertImage = function (image) {
  return image.map((el) => {
    return el.reverse().map((el) => (el === 0 ? 1 : 0))
  })
}

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
) //[[1,0,0],[0,1,0],[1,1,1]]

console.log(
  flipAndInvertImage([
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0],
  ])
) //[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
