var par = document.getElementById("msg");
var cliqueme = document.getElementById("clique-me");
cliqueme.addEventListener("click", exibirMensagem);

function exibirMensagem() {
  if (par.textContent != "Mensagem") {
    par.innerText = "Mensagem";
  } else {
    par.innerHTML = "Seja bem-vindo!";
  }
}

function exibirNome() {
  let par = document.getElementById("msg");
  par.innerHTML = nome
}
const params = new URLSearchParams(window.location.search); 
const nome = params.get('nomeInput');
if (nome != "" && nome != null) {
  exibirNome()
}


// VARIÁVEIS
numero = 9
var letra = 'E'
let palavra = "ETEC"
const PI = 3.14
if (par.textContent == "Olá!") {
  par.innerText = numero
}

let nomeTag = document.getElementsByTagName("p")
//nomeTag[0].innerHTML = "Pelo nome da Tag!"

let nomeInput = document.getElementsByName("nomeInput")
nomeInput[0].value = "Jornalista Roberto Marinho"

if (par.textContent != "Jornalista Roberto Marinho") {
  let botao = document.querySelector("button[type='submit']")
  //botao.click()
} 
