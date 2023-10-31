var checkIfPangram = function (sentence) {
  return new Set(sentence.match(/[a-z]/g)).size === 26
}

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")) //true
console.log(checkIfPangram("leetcode")) //false
