var op = '/'
var n1 = 4
var n2 = 4
function calcular(n1, n2, op) {
    if (op == '+') {
        return (n1 + n2)        
    } else if (op == '-') {
        return (n1 - n2)
    } else if (op == '*') {
        return (n1 * n2)
    } else {
        return (n1 / n2)
    }
}

var calculadora = calcular(n1, n2, op)
console.log(calculadora)