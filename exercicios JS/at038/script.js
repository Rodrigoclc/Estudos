var div1 = document.getElementById('div1')
var ok1  = document.getElementById('ok')
ok1.addEventListener('click', ok)
function ok() {
    div1.innerHTML = ''
    var c = 6
    while (c < 12) {
        div1.innerHTML += `${c},`
        c++
    }
}