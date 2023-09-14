var isEmpty = function (obj) {
  return !Object.keys(obj).length > 0
}

console.log(isEmpty({ x: 5, y: 42 })) //false
console.log(isEmpty({})) //true
console.log(isEmpty([null, false, 0])) //false
