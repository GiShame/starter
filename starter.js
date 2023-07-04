// Может быть вызван var, но он имеет hoisting undefined, const, let не имеют значений
console.log(qq)
var qq = 'Mikita'
let sequence = 'Kargo'
const mal = 200;
// Decloration может быть вызвана до выполнения кода
console.log(funcDecloration(2, 3))

// console.log(funcExpression(3,5))

function funcDecloration (a, b) {
   return b + a
}

var funcExpression = function (a,b) {
   return a + b
}
console.log(this)
// Так происходит, из-за предыдущего обращения к элементу this, он находится в global scope(window)
const arrFunc = (a,b) => { 
   a + b;
   console.log(this)
}

const nikita = {
   year: 2001,
   calcAge: function () {
      console.log(2021 - this.year)
   },
}
nikita.calcAge()

const yeagor = {
   year: 2002,
}
yeagor.calcAge = nikita.calcAge
yeagor.calcAge()