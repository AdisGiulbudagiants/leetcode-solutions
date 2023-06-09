var numberOfMatches = function (n) {
  let test = 0
  while (n > 1) {
    if (n % 2 === 0) {
      test += n /= 2
    } else {
      test += n /= 2
    }
  }
  return Math.floor(test)
}

console.log(numberOfMatches(7)) //6
console.log(numberOfMatches(14)) //13
