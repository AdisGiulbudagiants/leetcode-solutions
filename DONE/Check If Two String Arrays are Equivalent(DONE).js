var arrayStringsAreEqual = function (word1, word2) {
  return (
    word1.reduce((acc, cur) => acc + cur) ===
    word2.reduce((acc, cur) => acc + cur)
  )
}

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"])) //true
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"])) //false
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"])) //true
