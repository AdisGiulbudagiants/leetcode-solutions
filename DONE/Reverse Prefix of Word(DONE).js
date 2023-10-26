var reversePrefix = function (word, ch) {
  let indexOfCh = word.indexOf(ch)
  if (indexOfCh === -1) return word
  const reversedStart = word
    .slice(0, indexOfCh + 1)
    .split("")
    .reverse()
    .join("")
  return reversedStart + word.slice(indexOfCh + 1)
}

console.log(reversePrefix("abcdefd", "d")) //"dcbaefd"
console.log(reversePrefix("xyxzxe", "z")) //"zxyxxe"
console.log(reversePrefix("abcd", "z")) //"abcd"
