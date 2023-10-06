var iniciocx = document.getElementById('iniciocx')
var fimcx = document.getElementById('fimcx')
var passocx = document.getElementById('passocx')
var contarbt = document.getElementById('contarbt')
var div2 = document.getElementById('div2')
contarbt.addEventListener('click', contar)
function contar() {
    var inicio = Number(iniciocx.value)
    var fim = Number(fimcx.value)
    var passo = Number(passocx.value)
    div2.innerHTML = '<p>Contando:<p>'
    if (iniciocx.value.length == 0 || fimcx.value == '') {
        //impossivel contar
        div2.innerHTML = `Impossivel contar!`
    } else if (passo =='' || 0) {
        //quando o passo for invalido
        alert(`Passo inválido! Considerando PASSO 1`)
        for (var res = inicio;res <= fim;res += 1) {
            div2.innerHTML += `${res}&#128073;`
        }
    div2.innerHTML += `&#127988;`
    } else if (inicio < fim) {
        //contagem crescente
        for (var res = inicio;res <= fim;res += passo) {
            div2.innerHTML += `${res}&#128073;`
        }
    div2.innerHTML += `&#127988;`
    } else {
        //contagem decrescente
        for (var res = inicio;res >= fim;res -= passo) {
            div2.innerHTML += `${res}&#128073;`
        }
    div2.innerHTML += `&#127988;`
    }
}