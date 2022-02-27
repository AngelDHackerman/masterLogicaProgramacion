const invertir = (texto) => { 
  console.log(texto)
  let invertirTexto = '';

  for(let i = texto.length -1; i >= 0; i--) { 
    invertirTexto += texto[i];
  }
  return invertirTexto;
}

console.log(invertir('SoyElMejorProgramador'));
