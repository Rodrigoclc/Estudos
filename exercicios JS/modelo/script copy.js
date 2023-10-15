const opcoes = ["PEDRA &#128074", "PAPEL &#128400", "TESOURA &#9986"]
const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)]
const escolhaJogador = document.getElementsByClassName('escolha')

const ok = document.getElementById('ok')
let res = document.getElementById('res')

ok.onclick = function() {    

    if ((escolhaComputador == "PEDRA &#128074" && escolhaJogador[0]) || (escolhaComputador == "TESOURA &#9986" && escolhaJogador[2]) || (escolhaComputador == "PAPEL &#128400" && escolhaJogador[1])) {
        res.innerHTML = 'Empate!!!'
    } else if ((escolhaComputador == "PEDRA &#128074" && escolhaJogador[2]) || (escolhaComputador == "TESOURA &#9986" && escolhaJogador[1]) || (escolhaComputador == "PAPEL &#128400" && escolhaJogador[0])) {
        res.innerHTML = 'Computador Venceu!!!'
    } else {
        res.innerHTML = 'Jogador Venceu!!!'
    }
    res.innerHTML += `<p>Computador escolheu ${escolhaComputador}</p>`
    if (escolhaJogador[0]) {
        res.innerHTML += 'Jogador escolheu PEDRA &#128074'
    } else if (escolhaJogador[1]) {
        res.innerHTML += 'Jogador escolheu PAPEL &#128400'
    } else {
        res.innerHTML += 'Jogador escolheu TESOURA &#9986'
    }
}