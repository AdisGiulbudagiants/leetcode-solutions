var canConstruct = function (ransomNote, magazine) {
  for (let char of ransomNote) {
    if (!magazine.includes(char)) return false

    magazine = magazine.replace(char, "")
  }
  return true
}

console.log(canConstruct("a", "b")) //false
console.log(canConstruct("aa", "ab")) //false
console.log(canConstruct("aa", "aab")) //true
