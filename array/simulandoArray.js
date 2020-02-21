const quaseArray = { 0: 'Gabs', 1: 'Yago', 2: 'Fael' }
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Gabs', 'Yago', 'Fael']
console.log(quaseArray.toString(), meuArray)