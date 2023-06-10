var sortSentence = function (s) {
  const sortedArr = s.split(" ").sort((a, b) => {
    const indexA = parseInt(a.match(/\d+/)[0])
    const indexB = parseInt(b.match(/\d+/)[0])
    return indexA - indexB
  })
  return sortedArr.map((el) => el.replace(/\d+/, "")).join(" ")
}

console.log(sortSentence("is2 sentence4 This1 a3")) //"This is a sentence"
console.log(sortSentence("Myself2 Me1 I4 and3")) //"Me Myself and I"
