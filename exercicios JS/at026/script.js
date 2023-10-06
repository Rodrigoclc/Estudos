var n1cx = document.getElementById('n1cx')
var n2cx = document.getElementById('n2cx')
var div2 = document.getElementById('div2')
var compararbt = document.getElementById('compararbt')
compararbt.addEventListener('click', comparar)

function comparar() {
    if (n1cx.value == '' || n2cx.value == '') {
        alert('[ERRO] Verifique os dados')
    } if (n1cx.value > n2cx.value) {
        div2.innerHTML = `O Primeiro valor é o maior`
    } else if (n1cx.value < n2cx.value) {
        div2.innerHTML = `O Segundo valor é o maior`
    } else {
        div2.innerHTML = `Não existe valor maior, os dois são iguais`
    }
}