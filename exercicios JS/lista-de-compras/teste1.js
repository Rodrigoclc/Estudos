let additemcx = document.querySelector('input#additemcx')
let btadditem = document.querySelector('input#btadditem')
let exitemcx = document.querySelector('input#exitemcx')
let btexitem = document.querySelector('input#btexitem')
let sellista = document.querySelector('select#sellista')
let res = document.querySelector('div#res')
let ListaDeCompras = []
let nitem = ''
function temounão(a,b) {
    if (b != -1) {
        return 'repitido'
    } else if (a.length == 0) {
        return 'vazio'
    }
}
btadditem.onclick = function() {
    var validação = temounão(additemcx.value, ListaDeCompras.indexOf(additemcx.value)) 
    if (validação == 'vazio') {
        alert('[ERRO] Digite o nome de um item.')
    } else if(validação == 'repitido') {
        alert('Item já existente na Lista.')
    } else {
        let item = document.createElement('option')
        nitem = (ListaDeCompras.length) + 1
        item.text = `${nitem} - ${additemcx.value}`
        sellista.appendChild(item)
        ListaDeCompras.push(additemcx.value)        
    }
additemcx.value = ''
additemcx.focus()
}
//função para excluir itens 
btexitem.onclick = function() { 
    if (ListaDeCompras.length == 0) {
        alert('Nenhum item a ser excluido.')
    } else if (exitemcx.value === '') {
        alert('Digite o nome do item a ser excluído.')
    } else if (ListaDeCompras.indexOf(exitemcx.value) == -1) {
        alert('Item não encontrado')
    } else {
        //exclui valor do array
        ListaDeCompras.splice(ListaDeCompras.indexOf(exitemcx.value), 1)
        //exclui item do select
        let itemParaRemover = exitemcx.value
        for (let i = 0; i < sellista.options.length; i++) {
            if (sellista.options[i].value === itemParaRemover) {
                sellista.removeChild(sellista.options[i])
                break
            }
        }   
    }
    exitemcx.value = ''; // Limpa o campo após a remoção
}