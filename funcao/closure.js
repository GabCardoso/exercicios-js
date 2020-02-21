// Closure é o escopo criado quando uma funlão é declarada
// Esse escopo permite a função acessare manipular variáveis externas à função

// Contexto léxico em ação

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())