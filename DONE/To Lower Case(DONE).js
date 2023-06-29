var toLowerCase = function (s) {
  return s
    .split("")
    .map((el) => el.toLowerCase())
    .join("")
}

console.log(toLowerCase("Hello")) //"hello"
console.log(toLowerCase("here")) //"here"
console.log(toLowerCase("LOVELY")) //"lovely"
