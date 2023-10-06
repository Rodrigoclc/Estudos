var resposta = document.getElementById('resposta')
var idadecx = document.getElementById('idadecx')
var pais = document.getElementsByName('pais')
var verificarbt = document.getElementById('verificarbt')
verificarbt.addEventListener('click', verificar)
//bra 18 anos
//usa 21 anos
//por sem idade minima
function verificar() {
    resposta.innerHTML = ''
    // if ((idadecx.value >= 21 && pais[0].checked) || pais[2].checked || (idadecx.value >= 18 && pais[1].checked)) {
    //     resposta.innerHTML = `Permitido`
    // } else {
    //     resposta.innerHTML = `Proibido`
    // }
}