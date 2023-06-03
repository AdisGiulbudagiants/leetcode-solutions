var smallestEvenMultiple = function (n) {
  let num = 2
  while (true) {
    if (num % n === 0) {
      return num
    }
    num += 2
  }
}

console.log(smallestEvenMultiple(5)) //10
console.log(smallestEvenMultiple(6)) //6
