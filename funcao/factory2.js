function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Produto1', 43))
console.log(criarProduto('Produto2', 45))