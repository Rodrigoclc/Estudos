var nota1cx = document.getElementById('nota1cx')
var nota2cx = document.getElementById('nota2cx')
var div2 = document.getElementById('div2')
var calcularbt = document.getElementById('calcularbt')
calcularbt.addEventListener('click', calcular)

function calcular() {
   var nota1 = Number(nota1cx.value)
   var nota2 = Number(nota2cx.value)
   var media = (nota1 + nota2) / 2
   div2.innerHTML = ''
    if ((nota1cx.value.length == 0 || (nota1cx.value < 0 || nota1cx.value > 10))|| (nota2cx.value.length == 0 || (nota2cx.value < 0 || nota2cx.value > 10))) {
         alert('[ERRO] Verifique os dados.')
     } else if (media < 5) {       
         div2.innerHTML = `Sua media é de ${media} REPROVADO`
     } else if (media < 7) {
        div2.innerHTML = `Sua media é de ${media} RECUPERAÇÃO`
     } else {
        div2.innerHTML = `Sua media é de ${media} APROVADO`
     }
}
