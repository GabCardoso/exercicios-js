// pessoa -> 123 -> {...}
const pessoa = { nome: 'Gabs' }
pessoa.nome = 'Yago Chato'

console.log(pessoa)

// pessoa -> 456 -> {...} 
//pessoa = { nome: 'Gabs :3' }

Object.freeze(pessoa)

pessoa.nome = 'Yago'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Gabs' })
pessoaConstante.nome = 'Teste'
console.log(pessoaConstante)