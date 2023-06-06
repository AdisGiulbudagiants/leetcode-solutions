var canMakeArithmeticProgression = function (arr) {
  let res = []
  for (let i = 1; i < arr.length; i++) {
    const diff = arr.sort((a, b) => a - b)[i] - arr.sort((a, b) => a - b)[i - 1]
    res.push(diff)
  }
  for (let i = 1; i < res.length; i++) {
    if (res[i] !== res[0]) {
      return false
    }
  }
  return true
}

console.log(canMakeArithmeticProgression([3, 5, 1])) //true
console.log(canMakeArithmeticProgression([1, 2, 4])) //false
console.log(canMakeArithmeticProgression([-68, -96, -12, -40, 16])) //true
