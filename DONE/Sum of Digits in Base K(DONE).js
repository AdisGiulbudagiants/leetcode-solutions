var sumBase = function (n, k) {
  return n
    .toString(k)
    .split("")
    .reduce((acc, cur) => Number(acc) + Number(cur))
}

console.log(sumBase(34, 6)) //9
console.log(sumBase(10, 10)) //1
