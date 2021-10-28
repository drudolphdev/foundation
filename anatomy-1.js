// Function declaration
// do tipo que nao recebe parametro e nao retorna nada
function sayHello() {
    console.log('Hello!')
}
sayHello()

// do tipo que recebe parametro mas nao retorna nada
function sayHelloTo(name) {
    console.log(`Hello ${name}!`)
}
sayHelloTo('Mike')

// nao recebe parametro mas retorna algo
function returnHi() {
    return 'Hi'
}
returnHi 

const greeting = returnHi()
console.log(greeting)
console.log(returnHi())

// do tipo que recebe parametro e retorna algo
function returnHiTo(name) {
    return `Hi ${name}!`
}
console.log(returnHiTo('John'))
