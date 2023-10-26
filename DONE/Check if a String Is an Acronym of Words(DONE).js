var isAcronym = function (words, s) {
  const acronym = words.map((el) => el[0]).join("")
  return acronym === s
}

console.log(isAcronym(["alice", "bob", "charlie"], "abc")) //true
console.log(isAcronym(["an", "apple"], "a")) //false
console.log(isAcronym(["never", "gonna", "give", "up", "on", "you"], "ngguoy")) //true
