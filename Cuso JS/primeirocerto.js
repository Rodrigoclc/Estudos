var numerocx = document.getElementById('numerocx')
var add = document.getElementById('add')
var seletor = document.getElementById('seletor')
var fim = document.getElementById('fim')
var res = document.getElementById('res')
//var numero = Number(numerocx.value)
var tabela = []
function temounao(n) {
    if (n == -1) {
        return '0'
    } else {
        return '1'
    }
}
add.onclick = function() {
    res.innerHTML = ''
    var repitido = temounao(tabela.indexOf(Number(numerocx.value)))
    if (numerocx.value.length == 0 || numerocx.value <= 0 || numerocx.value > 100 || repitido == 1) {
        alert('Valor invalido ou já encontrado na lista.')
    } else {        
        var item = document.createElement('option')
        item.text = `Valor ${Number(numerocx.value)} adicionado.`
        seletor.appendChild(item)
        tabela.push(Number(numerocx.value))
        tabela.sort((a, b) => a - b)
    }
}
fim.onclick = function() {    
    if (numerocx.value.length == 0) {
        alert('Adicione valores antes de Finalizar!')
    } else {
        res.innerHTML = `<p>Ao todo, temos ${tabela.length} números cadastrados.<p>`        
        var ultimo = tabela[tabela.length - 1]
        res.innerHTML += `<p>O maior valor informado foi ${ultimo}.<p>`
        res.innerHTML += `<p>O menor valor informado foi ${tabela[0]}.<p>`
        var soma = 0        
        for (var i in tabela) { //essa for é para somar os valores do array tabela
            soma += tabela[i]
        }
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.<p>`
        var media = soma / tabela.length // aqui é calculado a media dos valores do array tabela
        res.innerHTML += `<p>A média dos valores digitados é ${media}.<p>`
        
    }
}