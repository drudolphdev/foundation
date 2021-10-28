// Function Expression
// Transformacao de uma function para funcao arrow(anonima)
// Criar func incremento, defino uma funcao anonima atrib uma constante n
// Simplific= tudo o que for incluido em uma linha da func
// resposta igual n + 1


const increment1 = function(n) {
    return n + 1
}

// Arrow Function is always anonymous
const increment2 = (n) => {     // "function" subst pela "seta" indica function arrow
    return n + 1
}

const increment3 = n => {    //pode ser retirado os parenteses da funcao "n"
    return n + 1
}

// // simplificando: qdo tirar par chaves (tirar tb o "return")
const increment4 = n => n + 1   // return em arrow = é implicito (nao usar "return")

console.log(increment1(1))
console.log(increment2(5))
console.log(increment3(24))
console.log(increment4(199))