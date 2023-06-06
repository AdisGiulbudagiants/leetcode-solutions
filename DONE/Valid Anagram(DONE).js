var isAnagram = function (s, t) {
  const s1 = s.split("").sort().join("")
  const t1 = t.split("").sort().join("")
  return s1 === t1
}

console.log(isAnagram("anagram", "nagaram")) //true
console.log(isAnagram("rat", "car")) //false
