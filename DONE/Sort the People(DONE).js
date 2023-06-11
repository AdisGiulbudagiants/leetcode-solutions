var sortPeople = function (names, heights) {
  let people = []
  for (let i = 0; i < names.length; i++) {
    people.push([names[i], heights[i]])
  }
  return people.sort((a, b) => b[1] - a[1]).map((el) => el[0])
}

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170])) //["Mary","Emma","John"]
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150])) //["Bob","Alice","Bob"]
