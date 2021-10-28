// Anonimous Functions
// IIFE - Immediately Invoked Function Expression
// USO: Qdo preciso garantir que valor estejam em 1 escopo restrito (ex. em 1 funcao)

(function (a, b, c) {
    let x = 3
    console.log(`Result: ${a + b + c}`)
    console.log(x)
})(1, 2, 3);    // necessário o uso deste ";"

(function () {
    let x = 300
    console.log(x)
})();           // necessário o uso deste ";"

// Tambem podem ser aplicadas a funcoes Arrow
(() => {
    console.log('arrow #01')
})();

(() => console.log('arrow #02'))();



