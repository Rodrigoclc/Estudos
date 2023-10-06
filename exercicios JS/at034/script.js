var alturacx = document.getElementById('alturacx')
var pesocx = document.getElementById('pesocx')
var div2 = document.getElementById('div2')
var calbt = document.getElementById('calbt')
calbt.addEventListener('click', calcular)

function calcular() {
    altura = Number(alturacx.value)
    peso = Number(pesocx.value)
    imc = peso / altura ** 2
    div2.innerHTML = ''
    if (alturacx.value.length == 0 || pesocx.value.length == 0) {
        alert('[ERRO] Verifique os dados.')
    } else if (imc < 18.5) {
        div2.innerHTML = `Seu IMC é de ${imc.toFixed(2).replace('.', ',')}. Você está abaixo do peso.`
    } else if (imc < 25) {
        div2.innerHTML = `Seu IMC é de ${imc.toFixed(2).replace('.', ',')}. Você está no peso ideal.`
    } else if (imc < 30) {
        div2.innerHTML = `Seu IMC é de ${imc.toFixed(2).replace('.', ',')}. Você está com sobrepeso.`
    } else if (imc < 40) {
        div2.innerHTML = `Seu IMC é de ${imc.toFixed(2).replace('.', ',')}. Você está com obesidade.`
    } else {
        div2.innerHTML = `Seu IMC é de ${imc.toFixed(2).replace('.', ',')}. Você está com obesidade mórbida.`
    }
}