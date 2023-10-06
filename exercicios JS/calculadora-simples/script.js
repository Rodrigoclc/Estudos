var n1cx = document.getElementById('n1cx')
var n2cx = document.getElementById('n2cx')
var calcularbt  = document.getElementById('calcularbt')
var operacao = document.getElementsByName('operação')
var res = document.getElementById('res')

function calcular (n1, n2, op) {
    if (op[0].checked) {
        return (n1 + n2)        
    } else if (op[1].checked) {
        return (n1 - n2)
    } else if (op[2].checked) {
        return (n1 * n2)
    } else {
        return (n1 / n2)
    }
}

calcularbt.onclick = function() {
    res.innerHTML = ''
    var calculadora = calcular(Number(n1cx.value), Number(n2cx.value), operacao)
    res.innerHTML = `O resultado do calculo é: ${calculadora}`
}
