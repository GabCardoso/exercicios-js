//cadeia de caracteres delimitados por "" ou '' ou ``
const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // retorna vazio por não ter achado o valor nesse índice
console.log(escola.charCodeAt(3)) //código relacionado a tabela unicode
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

// + = concat para Strings
console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))

// Divide a string em um array
console.log('Ana,Maria,Pedro'.split(','))