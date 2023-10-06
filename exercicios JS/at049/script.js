var cx1 = document.getElementById('cx1')
var cx2 = document.getElementById('cx2')
var cx3 = document.getElementById('cx3')
var cx4 = document.getElementById('cx4')
var cx5 = document.getElementById('cx5')
var cx6 = document.getElementById('cx6')
var res = document.getElementById('res')

var ver = document.getElementById('ver')
ver.addEventListener('click', verificar)

function verificar() {
    if ((cx1.value % 2 == 0) || (cx2.value % 2 == 0) || (cx3.value % 2 == 0) || (cx4.value % 2 == 0) || (cx5.value % 2 == 0) || (cx6.value % 2 == 0)) {
        res.innerHTML = ``
    }
}