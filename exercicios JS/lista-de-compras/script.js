let additemcx = document.querySelector('input#additemcx')
let btadditem = document.querySelector('input#btadditem')
let exitemcx = document.querySelector('input#exitemcx')
let btexitem = document.querySelector('input#btexitem')
let lista = document.getElementById('lista')
let res = document.querySelector('div#res')
let ListaDeCompras = []
let nitem = ''

btadditem.onclick = function() {
    if (additemcx.value === '') {
        alert('[ERRO] Digite o nome de um item.')
    } else if (ListaDeCompras.includes(additemcx.value)) {
        alert('Item já existente na Lista.')
    } else {
        let item = document.createElement('li')
        //nitem = ListaDeCompras.length + 1
        item.text = `${additemcx.value}`
        lista.appendChild(item)
        ListaDeCompras.push(additemcx.value)
        additemcx.value = ''
        additemcx.focus()
    }
}

btexitem.onclick = function() {
    let itemParaRemover = exitemcx.value
    if (itemParaRemover === '') {
        alert('Digite o nome do item a ser excluído.')
    } else if (!ListaDeCompras.includes(itemParaRemover)) {
        alert('Item não encontrado.')
    } else {
        // Remove o item do array
        ListaDeCompras = ListaDeCompras.filter(item => item !== itemParaRemover)
        lista.removeChild(itemParaRemover)

        // Remove o item do select
        // for (let i = 0; i < sellista.options.length; i++) {
        //     if (sellista.options[i].value === itemParaRemover) {
        //         sellista.removeChild(sellista.options[i])
        //         break
        //     }
        // }
        exitemcx.value = ''
    }
}