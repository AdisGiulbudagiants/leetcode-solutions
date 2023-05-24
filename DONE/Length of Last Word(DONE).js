var lengthOfLastWord = function (s) {
  const arr = s.split(" ").filter((el) => {
    return el.trim() !== ""
  })
  return arr[arr.length - 1].length
}

console.log(lengthOfLastWord("   fly me   to   the moon  ")) //4
console.log(lengthOfLastWord("Hello World")) //5
console.log(lengthOfLastWord("luffy is still joyboy")) //6
