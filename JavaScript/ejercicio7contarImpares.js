console.group('Mi respuesta:');
const contarImpares = (numeroInicial, numeroFinal) => { 
  let numeros = [];
  let conteoNumeros = 0;

  for (let i = numeroInicial; i <= numeroFinal; i++) { 
    if (i % 2 != 0 && i != numeroInicial && i != numeroFinal) { 
      numeros.push(i)
      
    }
  }
  conteoNumeros = numeros.length;
  console.log(`Entre el numero: ${numeroInicial} y el numero: ${numeroFinal} hay: ${conteoNumeros} y son los: ${numeros}` );
  
}

contarImpares(1, 100);
console.groupEnd();

      // * Respuesta del profesor

console.group('Respuesta del profesor:');
const impares = (numero1, numero2) => {
  let contador = 0; 

  while(numero1 < numero2) { 
    if (numero1 % 2 !== 0) {
      contador++;
    } 
    numero1++
  }
  return contador;
}
console.log(impares(1, 100))
console.groupEnd();

