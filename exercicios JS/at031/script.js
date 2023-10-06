var div2 = document.getElementById('div2')
var okbt = document.getElementById('okbt')
okbt.addEventListener('click', ok)
div2.style.textAlign = 'center'

function ok() {
    div2.innerHTML = ''
    var jogador1 = document.getElementsByName('jogador1')
    var jogador2 = document.getElementsByName('jogador2')
    if ((jogador1[0].checked && jogador2[0].checked) || (jogador1[1].checked && jogador2[1].checked) || (jogador1[2].checked && jogador2[2].checked)) {
        div2.innerHTML = 'Empate!'
    } else if ((jogador1[0].checked && jogador2[2].checked) || (jogador1[1].checked && jogador2[0].checked) || (jogador1[2].checked && jogador2[1].checked)) {
        div2.innerHTML = `Primeiro jogador GANHADOR!`
    } else {
        div2.innerHTML = `Segundo jogador GANHADOR!`
    }
}