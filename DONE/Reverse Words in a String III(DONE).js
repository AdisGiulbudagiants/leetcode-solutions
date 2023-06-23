var reverseWords = function (s) {
  const res = s
    .split(" ")
    .map((el) => {
      return el.split("").reverse().join("")
    })
    .join(" ")
  return res
}

console.log(reverseWords("Let's take LeetCode contest")) //"s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords("God Ding")) //"doG gniD"
