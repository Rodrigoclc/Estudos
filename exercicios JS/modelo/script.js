const opcoes = ["PEDRA", "PAPEL", "TESOURA"]
const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)]
const escolhaJogador = document.getElementsByClassName('escolha')

const ok = document.getElementById('ok')
let res = document.getElementById('res')

ok.onclick = function() {    

    if ((escolhaComputador == "PEDRA" && escolhaJogador[0]) || (escolhaComputador == "TESOURA" && escolhaJogador[2]) || (escolhaComputador == "PAPEL" && escolhaJogador[1])) {
        res.innerHTML = 'Empate!!!'
    } else if ((escolhaComputador == "PEDRA" && escolhaJogador[2]) || (escolhaComputador == "TESOURA" && escolhaJogador[1]) || (escolhaComputador == "PAPEL" && escolhaJogador[0])) {
        res.innerHTML = 'Computador Venceu!!!'
    } else {
        res.innerHTML = 'Jogador Venceu!!!'
    }
    res.innerHTML += `<p>Computador escolheu ${escolhaComputador}</p>`
    if (escolhaJogador[0]) {
        res.innerHTML += 'Jogador escolheu PEDRA'
    } else if (escolhaJogador[1]) {
        res.innerHTML += 'Jogador escolheu PAPEL'
    } else {
        res.innerHTML += 'Jogador escolheu TESOURA'
    }
}