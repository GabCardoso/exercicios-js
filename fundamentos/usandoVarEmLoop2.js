const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() // imprime o valor de i após o loop
funcs[8]() // imprime o valor de i após o loop