const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// 1º param = elemento | 2º param = indice | 3º param = array
aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)