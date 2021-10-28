// Parameters

// sem definicao de parametros
function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1, 2, 3, 4, 5)
logParams(1, 2, 3)
logParams(1, 2)
logParams(1)
logParams()

// com definicao fixa de parametros
function defaultPar(a = 1, b = 2, c = 3) {
    console.log(a, b, c)
}

defaultPar(7, 8, 9)
defaultPar(7, 8)
defaultPar(7)
defaultPar()
x = logParams(1, 2)
console.log(1)
console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

function logNums(nums) {
    for(let n of nums) {
        console.log(n)
    }
}
logNums([1, 2, 3])

// Quantidade flexivel de parametros
// spread/rest = "..." incluido antes da variavel
// indica que funcao recebe qtd variavel de parametros
// e todos sao armazendaod dentro da funcao 
// usamos aqui todas as funcionalid de 1 array os val foram
// passados como um array
function logNums(...nums) {
    console.log(nums)
}
logNums(1, 2, 3)   // excluir "[]" quando aplic o spread "..." 


function sumAll(...nums) {
    let total = 0
    for(let n of nums) {
        total += n
    }
    return total
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
