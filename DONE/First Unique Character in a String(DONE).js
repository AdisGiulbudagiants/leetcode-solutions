var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s.charAt(i)) === s.lastIndexOf(s.charAt(i))) {
      return s.indexOf(s.charAt(i))
    }
  }
  return -1
}

console.log(firstUniqChar("leetcode")) //0
console.log(firstUniqChar("loveleetcode")) //2
console.log(firstUniqChar("aabb")) //-1
