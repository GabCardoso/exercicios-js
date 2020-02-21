const prod1 = {} //cria um objeto vazio
prod1.nome = 'Celular'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa',
    preco: 79.90,
    obj: { // Um objeto pode estar contido dentro de outro
        teste: 1,
        obj: {
            teste: 2
        }
    }
}

console.log(prod2)