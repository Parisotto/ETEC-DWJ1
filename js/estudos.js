var par = document.getElementById("msg");
var cliqueme = document.getElementById("clique-me");
cliqueme.addEventListener("click", exibirMensagem);

function exibirMensagem() {
  if (par.textContent != "Mensagem") {
    par.innerText = "Mensagem";
  } else {
    par.innerHTML = "Seja bem-vindo!";

    let nomeInput = document.getElementsByName("nomeInput")
    nomeInput[0].value = "Jornalista Roberto Marinho"

    let botao = document.querySelector("button[type='submit']")
    botao.click()
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
  par.innerText = palavra
  par.style.color = "#0c0"
  par.style.fontWeight = "bold"
}

let nomeTag = document.getElementsByTagName("article")
nomeTag[0].innerHTML = "Pelo nome da Tag! = article"


nomeTag[0].innerText = 10 + 8
let n1 = 9
let n2 = 7
nomeTag[0].innerText = n1 + n2
expressao = (n1 + n2) * 2
nomeTag[0].innerText = expressao
