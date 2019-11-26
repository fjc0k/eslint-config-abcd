console.log(111)

const x = window?.top

console.log(x)

const c = window.top ?? 'd'

console.log(c)

interface Hello {
  say?: {
    xx(): number,
  },
}

const hello: Hello = {}

const say = hello.say?.xx()

console.log(say)
