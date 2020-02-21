// Object.preventExtensions
 const produto = Object.preventExtensions({
     nome: 'Nome', preco: 1.9, tag: 'promoção'
 })

 console.log('Extensível:', Object.isExtensible(produto))

 produto.any = 'Borracha'
 produto.descricao = 'Borracha branca'
 delete produto.tag
 console.log(produto)

 // Object.seal
 const pessoa = { nome: 'Gabs', idade: 25 }
 Object.seal(pessoa)
 console.log('Selado:', Object.isSealed(pessoa))

 pessoa.sobrenome = 'Cardoso'
 delete pessoa.nome
 pessoa.idade = 26
 console.log(pessoa)

 // Object.freeze = selado + valores constantes