// Anonymus function (n tem nome, uso palavra reservada def parametros)
// Uso de parenteses 
(function (a, b, c) {
    return a + b + c
})

// Function expression (atrib a uma variavel /ou/ constante uma funcao)
// presenca de variavel diferencia os dois tipos de funcoes (uso de comando let/const)
const sum = function (a, b) {
    return a + b 
}

const result = sum(7, 59)
console.log(result)

const anotherSum = sum
console.log(anotherSum(5, 9))

let x = 3
console.log(x)

x = sum
console.log(x)

x = sum