console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Gabs', 'Bug', 'Yago')
console.log(aprovados)

aprovados = ['Gabs', 'Bug', 'Yago']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo'
aprovados.push('Bibs')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Gabs', 'Bug', 'Yago']
aprovados.splice(1, 1, 'Elemento')
console.log(aprovados)