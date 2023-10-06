var div2 = document.getElementById('div2')
var ok1  = document.getElementById('ok')
ok1.addEventListener('click', ok)
function ok() {
    div2.innerHTML = ''
    for (var c = 0; c <= 18; c += 3) {
        div2.innerHTML += `${c},`
    }
    div1.innerHTML =''
    div2.innerHTML += ` Acabou!`
} 
