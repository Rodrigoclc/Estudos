var nomecx = document.getElementById('nomecx')
var valorcx = document.getElementById('valorcx')
var calcularbt = document.getElementById('calcularbt')
calcularbt.addEventListener('click', calcular)
var div2 = document.getElementById('div2')

function calcular() {
    
    if (nomecx.value.length == 0 || valorcx.value.length == 0) {
        alert('[ERRO] Verifique os dados')
    } else {
        var nome = (nomecx.value)
        var valor = (valorcx.value)
        var sexo = document.getElementsByName('rdsexo')
    } if (sexo[0].checked) {
        //Feminino
        var mulherdes = (valor * 0.13)
        div2.innerHTML = `Parabéns Sra. ${nome} seu desconto é de R$${mulherdes}`
    } else {
        //Masculino
        var homemdes = (valor * 0.05)
        div2.innerHTML = `Parabéns Sr. ${nome} seu desconto é de R$${homemdes}`
    }
}