var numerocx = document.getElementById('numerocx')
var contarbt = document.getElementById('contarbt')
var div2 = document.getElementById('div2')
contarbt.addEventListener('click', contar)

function contar() {
    var numero = Number(numerocx.value)
    for (var c = 0; c <= numero; c++) {
        div2.innerHTML += ` ${c},`
    }
    div2.innerHTML += ` Acabou!`
}