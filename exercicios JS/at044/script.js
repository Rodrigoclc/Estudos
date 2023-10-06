var n1cx = document.getElementById('n1cx')
var incx = document.getElementById('incx')
var n2cx = document.getElementById('n2cx')
var div2 = document.getElementById('div2')
var contarbt = document.getElementById('contarbt')

contarbt.onclick = function () {
    var n1 = Number(n1cx.value)
    var n2 = Number(n2cx.value)
    var inc = Number(incx.value)
    div2.innerHTML = ''
    if (n1cx.value.length == 0 || n2cx.value.length == 0) {
        div2.innerHTML = 'Impossivel contar'
    }  else if ((incx.value.length == 0 || incx.value <= 0) && n1 < n2) {
        alert('Incremento invalido. Considerando incremento 1.')
        while (n1 <= n2) {
            div2.innerHTML += ` ${n1},`
            n1 ++
        }
        div2.innerHTML += ' Pronto!'
    } else if ((incx.value.length == 0 || incx.value <= 0) && n1 > n2) {
        alert('Incremento invalido. Considerando incremento 1.')
        while (n2 <= n1) {
            div2.innerHTML += ` ${n1},`
            n1 --
        }
        div2.innerHTML += ' Pronto!'
    } else if (n1 < n2){
        while (n1 <= n2) {
            div2.innerHTML += ` ${n1},`
            n1 += inc
        }
        div2.innerHTML += ' Pronto!'
    } else if (n1 > n2){
        while (n2 <= n1) {
            div2.innerHTML += ` ${n1},`
            n1 -= inc
        }
        div2.innerHTML += ' Pronto!'
    } 
}