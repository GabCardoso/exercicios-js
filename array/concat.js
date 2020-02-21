const filhas = [ 'Gabs', 'Bug' ]
const filhos = [ 'Biel', 'João']
const todos = filhas.concat(filhos, 'Fulano')
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [1, 4], 5, [[6, 7]]))