var addTwoPromises = async function (promise1, promise2) {
  return Promise.all([await promise1, await promise2]).then((values) => {
    return values[0] + values[1]
  })
}

addTwoPromises(
  new Promise((resolve) => setTimeout(() => resolve(2), 20)),
  new Promise((resolve) => setTimeout(() => resolve(5), 60))
).then((resolve) => console.log(resolve))
