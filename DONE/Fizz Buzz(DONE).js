var fizzBuzz = function (n) {
  let res = []
  for (let i = 1; i <= n; i++) {
    res.push(String(i))
  }
  const final = res.map((el) => {
    if (parseInt(el) % 3 === 0 && parseInt(el) % 5 === 0) {
      return "FizzBuzz"
    } else if (parseInt(el) % 3 === 0) {
      return "Fizz"
    } else if (parseInt(el) % 5 === 0) {
      return "Buzz"
    }
    return el
  })
  return final
}

console.log(fizzBuzz(3)) //["1","2","Fizz"]
console.log(fizzBuzz(5)) //["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15)) //["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
