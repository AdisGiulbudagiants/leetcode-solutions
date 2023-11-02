var numJewelsInStones = function (jewels, stones) {
  let result = 0
  for (let i = 0; i < jewels.length; i++) {
    stones.split("").map((el) => {
      if (el == jewels[i]) {
        result++
      }
    })
  }
  return result
}
console.log(numJewelsInStones("aA", "aAAbbbb")) //3
console.log(numJewelsInStones("z", "ZZ")) //0
