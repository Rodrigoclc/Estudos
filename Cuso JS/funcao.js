var numerocx = document.getElementById('numerocx')
var add = document.getElementById('add')
var seletor = document.getElementById('seletor')
var fim = document.getElementById('fim')
var res = document.getElementById('res')
//var numero = Number(numerocx.velue)
var tabela = []

function adicionar(n, i) {
if (n.length != 0 || n >= 1 || n <= 100 || i == -1) {
return 'ok'
} else {
    return 'erro'
}
}
var validaçao = adicionar(numerocx.value, tabela.indexOf(numerocx.value))
function PopularArrayInterno() {
    add.onclick = function() {
        res.innerHTML = ''
        if (validaçao == 'erro') {
            alert('[ERRO] Digite um número valido!')
        } else {
            var item = document.createElement('option')
            item.text = `Valor ${Number(numerocx.value)} adicionado.`
            seletor.appendChild(item)
            var numeros = []
            numeros.push(Number(numerocx.value))
            numeros.sort((a, b) => a - b) //essa sintase coloca os números em ordem crescente
            tabela = numeros.slice()
        }
    }
}
PopularArrayInterno()




var tabela = [1, 2, 3, 4, 5]
function temounao(n) {
    if (n == -1) {
        return '0'
    } else {
        return '1'
    }
}
var repitido = temounao(tabela.indexOf(6))
if (repitido == 1) {
console.log('erro')
} else {
    console.log('ok')
}