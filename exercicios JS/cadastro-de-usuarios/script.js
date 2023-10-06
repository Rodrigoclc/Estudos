var nome = document.querySelector('input#nome')
var email = document.querySelector('input#email')
var senha = document.getElementById('senha')
var confirmaSenha = document.getElementById('confSenha')
var genero = document.getElementsByName('genero')
var paisSel = document.getElementById('paissel')
var termos = document.getElementById('termos')
var cadastrar = document.getElementById('cadastrar')

function validarEmail(email) {
    // Expressão regular para validar um formato de e-mail básico
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    return regex.test(email);
}
cadastrar.onclick = function () {
    if (nome.value.length == 0 || email.value.length == 0 || senha.value.length == 0 || 
        confirmaSenha.value.length == 0) {
    alert('Peencha todos os campos!')
    } else if (senha.value !== confirmaSenha.value) {
        alert('As senhas não coincidem!')
    }
    if (!validarEmail(email.value)) {
        alert('Email inválido')
    }
}
  