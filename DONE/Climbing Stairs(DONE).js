var climbStairs = function (n) {
  const db = Array(n + 1).fill(0)
  db[0] = 1
  db[1] = 1

  for (let i = 2; i <= n; i++) {
    db[i] = db[i - 1] + db[i - 2]
  }
  return db[n]
}

console.log(climbStairs(2)) //2
console.log(climbStairs(3)) //3
