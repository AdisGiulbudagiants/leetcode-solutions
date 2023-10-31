var prefixCount = function (words, pref) {
  let result = 0
  words.forEach((el) => {
    if (el.slice(0, pref.length).includes(pref)) {
      result++
    }
  })
  return result
}

console.log(prefixCount(["pay", "attention", "practice", "attend"], "at")) //2
console.log(prefixCount(["leetcode", "win", "loops", "success"], "code")) //0
