const notas = [6.7, 7.4, 9.9, 8.1, 7.7]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Gabs',
    sobrenome: 'Cardoso',
    idade: 25,
    peso: 67
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}