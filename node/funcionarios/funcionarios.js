const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulheres = f => f.genero == 'F'
const chinesas = f => f.pais == 'China'
const menorSalario = function (anterior, atual) {
    if (anterior.salario > atual.salario) {
        return atual
    }
    return anterior
}

axios.get(url).then(response => {
    let funcionarios = []
    funcionarios = response.data

    const resultado = funcionarios.filter(mulheres).filter(chinesas).reduce(menorSalario)
    console.log(resultado)
})