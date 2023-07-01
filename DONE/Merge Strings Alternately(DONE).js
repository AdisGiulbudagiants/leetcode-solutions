var mergeAlternately = function (word1, word2) {
  let result = []
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) result.push(word1[i])
    if (i < word2.length) result.push(word2[i])
  }
  return result.join("")
}

console.log(mergeAlternately("abc", "pqr")) //"apbqcr"
console.log(mergeAlternately("ab", "pqrs")) //"apbqrs"
console.log(mergeAlternately("abcd", "pq")) //"apbqcd"
