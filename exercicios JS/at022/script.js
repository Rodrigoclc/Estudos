var datacx = document.getElementById('datacx')
var okbt = document.getElementById('okbt')
var div2 = document.getElementById('div2')
okbt.addEventListener('click', verificar)

function verificar() {  
    var anofull = new Date()
    var ano = anofull.getFullYear()
    if (datacx.value.length == 0 || datacx.value > ano) {
        alert(`[ERRO] Data incorreta verifique os dados.`)
    }  else {
        var data = Number(datacx.value)
        var idade = ano - datacx.value
    } if (idade < 18) {
            faltaano = 18 - idade
            div2.innerHTML = `Sua idade é de ${idade} anos e ainda faltam ${faltaano} anos para vc se alistar.`
        } else {
            passaano = idade - 18
            div2.innerHTML = `Sua idade é de ${idade} anos e já se passaram ${passaano} anos do seu alistamento.`
        }
    
}

