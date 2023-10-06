var div1 = document.getElementById('div1')
var div2 = document.getElementById('div2')
var contarbt = document.getElementById('contarbt')
contarbt.addEventListener('click', contar)

function contar() {
    var n1 = 30
    var n2 = 1
    while (n1 >= n2) {
        if ((n1 % 4) == 0) {
            div2.innerHTML += ` [${n1}],`
        } else {
            div2.innerHTML += ` ${n1},`
        }
        n1--
    }
}