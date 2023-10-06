var btverificar = document.getElementById('ver')
btverificar.addEventListener('click', verificar)
function verificar() {
    var anocx = document.getElementById('anocx')
    //var anocxv = Number(anocx.value)
    var data = new Date()
    var ano = data.getFullYear()
    var idade = ano - Number(anocx.value)
    var res = document.getElementById('res')
    if (idade <= 0) {
        alert('[ERRO] Verifique os dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var gereno = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    } if (fsex[0].checked){
        genero = 'Homem'
        if (idade < 10) {
            //criança
            img.setAttribute('src', 'homemcriança.png')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'homemjovem.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'homemadulto.png')
        } else {
            //velho
            img.setAttribute('src', 'homemvelho.png')
        }
    } else if (fsex [1].checked) {
        genero = 'Mulher'
        if (idade < 10) {
            img.setAttribute('src', 'mulhercriança.png')
            //criança
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'mulherjovem.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'mulheradulta.png')
        } else {
            //velho
            img.setAttribute('src', 'mulhervelha.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}