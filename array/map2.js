const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas coms os preços
// minha solução
const resgatarPrecos = e => {
    const elemento = JSON.parse(e) 
    return elemento.preco
}
let precos = carrinho.map(resgatarPrecos)
console.log(precos)

// exemplo curso
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)