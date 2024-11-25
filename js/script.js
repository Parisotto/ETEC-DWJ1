function exibir() {
    const gal = document.querySelector("#gal")
    // gal.innerHTML = '<h1>Olá, Mundo!</h1>'
    //gal.innerHTML = '<img src="../img/1.jpg">'
    // const numero = Math.floor(Math.random() * 13) + 1
   //  gal.innerHTML = numero
   // gal.innerHTML = '<img src="../img/' + numero + '.jpg">'

   let ListaImagem = ""
   let numeros = new Set()
   while (numeros.size < 13) {
       let numero = Math.floor(Math.random() * 13) + 1
       numeros.add(numero)
   }
   let listaNumeros = Array.from(numeros)
   listaNumeros.forEach(numero=> {
        ListaImagem = ListaImagem + '<img src="../img/' + numero + '.jpg">'
   })

   gal.innerHTML = ListaImagem

}

window.onload = exibir