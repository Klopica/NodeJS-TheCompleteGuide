const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!')
    }, 1500)
  })
  return promise
}

// This is async code because it does not execute immediately
setTimeout(() => {
  console.log('Timer is done')
  fetchData()
  .then(text => {
    console.log(text)
    return fetchData()
  })
  .then(text2 => {
    console.log(text2)
  })
}, 2000)

console.log('Hello')
console.log('Hi!')
