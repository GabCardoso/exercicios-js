function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date()
    }
}

function imprimirNome(obj) {
    try {
        console.log(ojt.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Gabs'}
imprimirNome(obj)

const obj2 = { name: 'Gabs'}
imprimirNome(obj2)