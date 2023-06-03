var chunk = function (arr, size) {
  const res = []
  let index = 0
  while (index < arr.length) {
    res.push(arr.slice(index, index + size))
    index += size
  }
  return res
}

console.log(chunk([1, 2, 3, 4, 5], 1)) //[[1],[2],[3],[4],[5]]
console.log(chunk([1, 9, 6, 3, 2], 3)) //[[1,9,6],[3,2]]
console.log(chunk([8, 5, 3, 2, 6], 6)) //[[8,5,3,2,6]]
console.log(chunk([], 1)) //[]
