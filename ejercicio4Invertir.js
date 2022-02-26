const invertir = (texto) => { 
  console.log(texto)
  let arrayDeTexto = [];
  let reverso = [];

  for (let i = 0; i < texto.length; i++ ) { 
    arrayDeTexto.push(texto.charAt(i))
  }
  console.log(arrayDeTexto);

  for (let i = arrayDeTexto.length - 1; i >= 0; i--) { 
    reverso.push(arrayDeTexto[i]);
  }
  console.log(reverso);

  return reverso.join().replace(/[,]/gi, '')
}

console.log(invertir('mariposa'));