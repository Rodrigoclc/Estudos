var inputbt = document.getElementById('inputbt')
inputbt.addEventListener('click', tabuada)
function tabuada() {
    let numerocx = document.getElementById('numerocx')
    let seltab = document.getElementById('seltab')
    if (numerocx.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let numero = Number(numerocx.value)
        let c = 1
        seltab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${numero} x ${c} =${numero * c}`
            item.value = `seltab${c}`
            seltab.appendChild(item)
            c++
        }
    }
    

}