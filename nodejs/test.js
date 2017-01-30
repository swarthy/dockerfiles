process.on('SIGTERM', () => {
  console.log('SIGTERM!')
  process.exit()
})

let count = 0
const MAX_COUNT = process.env.COUNT || 30

console.log('Started:', MAX_COUNT)

function fib (n) {
  return n <= 2 ? n : n * fib(n - 1)
}

setInterval(() => {
  console.log('Tick', ++count, fib(count), new Date())
  if (count === MAX_COUNT) {
    console.log('Stopped!')
    process.exit(0)
  }
}, 1000)
