var nextGreatestLetter = function (letters, target) {
  for (let letter of letters) {
    if (letter > target) {
      return letter
    }
  }
  return letters[0]
}

console.log(nextGreatestLetter(["c", "f", "j"], "a")) // "c"
console.log(nextGreatestLetter(["c", "f", "j"], "c")) // "f"
console.log(nextGreatestLetter(["x", "x", "y", "y"], "z")) // "x"
