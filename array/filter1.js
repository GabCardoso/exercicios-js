const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

console.log(produtos.filter(function (e) {
    return e.fragil && e.preco > 500
}))

const caro = produto => produto.preco > 500
const fragil = produto => produto.fragil

const resultado = produtos.filter(caro).filter(fragil)
console.log(resultado)