var valorcx = document.getElementById('valorcx')
var rendacx = document.getElementById('rendacx')
var prazocx = document.getElementById('prazocx')
var div2 = document.getElementById('div2')
var calcularbt= document.getElementById('calcularbt')
calcularbt.addEventListener('click', calcular)
div2.style.textAlign = 'center'

function calcular() {
    div2.innerHTML = ''
    var valor = Number(valorcx.value)
    var renda = Number(rendacx.value)
    var prazo = Number(prazocx.value)
    var parcela = valor / prazo
    var margem = renda * 0.30
    // div2.innerHTML = parcela
    // div2.innerHTML += margem
    if (valorcx.value.length == 0 || rendacx.value.length == 0 || prazocx.value.length == 0) {
        alert('[ERRO] Verifique os dados.')
    } else if (parcela > margem) {
        div2.innerHTML = `Financiamento não aprovado, renda inferior para valor solicitado.`
    } else {
        div2.innerHTML = '<p>Parabêns seu financiamento foi aprovado.<p>'
        div2.innerHTML += `<p> O valor da sua parcela é de R$${parcela}<p>`
    }
}