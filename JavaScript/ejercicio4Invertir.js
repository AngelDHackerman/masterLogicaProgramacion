console.group('Mi respuesta:')
const invertir = (texto) => { 
  console.log(texto)
  let invertirTexto = '';

  for(let i = texto.length -1; i >= 0; i--) { 
    invertirTexto += texto[i];
  }
  return invertirTexto;
}

console.log(invertir('SoyElMejorProgramador'));
console.groupEnd();

        // * Solucion del profesor: 

console.group('Respuesta del profe:')
const invertir2 = (texto) => { 
  console.log(texto)
  let invertido = ''; 
  for (let letra of texto) {
    invertido = letra += invertido;
  }
  return invertido;
}

const invertido3v = (texto) => texto.split('').reverse().join('');

console.log(invertir2('BuenosDias'));
console.log(invertido3v('prueba invertido3v'))
console.groupEnd();
