var calcularbt = document.getElementById('calcularbt')
calcularbt.addEventListener('click', calcular)

function calcular() {
    var kmbt = document.getElementById('kmcx')
    var km = Number(kmcx.value)
    var div2 = document.getElementById('div2')
    div2.innerHTML = ''
    if (km <= 200) {
        var valor1 = km * 0.5
        div2.innerHTML = `O valor da sua passagem é de R$${valor1}`
    } else {
        var valor2 = km * 0.45
        div2.innerHTML = `O valor da sua passagem é de R$${valor2}`
    }
}
