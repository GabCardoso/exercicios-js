let valor // não inicializada
console.log(valor)
//console.log(valor2) //valor is not defined

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // não é possível acessar variveis null

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)