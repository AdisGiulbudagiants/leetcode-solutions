var myPow = function (x, n) {
  return Math.pow(x, n).toFixed(5)
}

console.log(myPow(2.0, 10)) //1024.00000
console.log(myPow(2.1, 3)) //9.26100
console.log(myPow(2.0, -2)) //0.25000
