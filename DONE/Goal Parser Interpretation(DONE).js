var interpret = function (command) {
  return command.replace(/\(\)/g, "o").replace(/\(al\)/g, "al")
}

console.log(interpret("G()(al)")) //"Goal"
console.log(interpret("G()()()()(al)")) //"Gooooal"
console.log(interpret("(al)G(al)()()G")) //"alGalooG"
