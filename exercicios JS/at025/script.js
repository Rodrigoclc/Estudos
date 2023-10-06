var reta1cx = document.getElementById('reta1cx')
var reta2cx = document.getElementById('reta2cx')
var reta3cx = document.getElementById('reta3cx')
var div2 = document.getElementById('div2')
var calcularbt = document.getElementById('calcularbt')
calcularbt.addEventListener('click', calcular)

function calcular() {
    var reta1 = Number(reta1cx.value)
    var reta2 = Number(reta2cx.value)
    var reta3 = Number(reta3cx.value)
    div2.innerHTML = ''
    if (reta1cx.value.length == 0 || reta2cx.value.length == 0 || reta3cx.value.length == 0) {
        alert('{ERRO} Verifique os dados.')
    } else if (reta3 >= (reta1 + reta2) || reta2 >= (reta1 + reta3) || reta1 >= (reta2 + reta3)) {
       div2.innerHTML = 'Não é possível formar um triangulo com essas retas'
    } else {
        div2.innerHTML = 'É possível formar um triangulo com essas retas'
    }
}
