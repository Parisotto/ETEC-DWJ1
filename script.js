function exibir() {
    const galeria = document.querySelector("#galeria")
   // galeria.innerhtml = '<h1>olá mundo!</h1>'
  // galeria.innerHTML = '<img srcs"../img/1.jpg">'
   //const numero = Math.floor(Math.random() *12) + 1
   //galeria.innerHTML = numero
  //galeria.innerHTML = '<img srcs"../img/' + numero + '.jpg">'

  let listaimagem = ""
  let numeros = new Set()
  while (numeros.size <15) {
      let numero = Math.floor(Math.random() * 25) + 1
      numeros.add(numero)
  }
  let listanumeros = Array.from(numeros)
  listanumeros.forEach(numero => {
    listanumeros = listaimagem + '<img srcs"../img/' + numero + '.jpg>'
  })

  galeria.innerHTML = listaimagem

}

window.onload = exibir