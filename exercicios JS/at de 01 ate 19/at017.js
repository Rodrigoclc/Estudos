var velocidade = 100
if (velocidade > 80) {
    var multa = (velocidade - 80) * 5
    console.log(`Sua velocidade é de ${velocidade}km/h, por isso foi multado. Sua múlta é de ${multa.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`) 
} else {
    console.log(`Pode proceguir`)
}