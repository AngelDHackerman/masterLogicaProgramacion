const contarImpares = (numeroInicial, numeroFinal) => { 
  let numeros = [];
  let conteoNumeros;

  for (let i = numeroInicial; i <= numeroFinal; i++) { 
    if (i % 2 != 0 && i != numeroInicial && i != numeroFinal) { 
      numeros.push(i)
    }
  }

  conteoNumeros = numeros.length;
  console.log(`Entre el numero: ${numeroInicial} y el numero: ${numeroFinal} hay: ${conteoNumeros} y son los: ${numeros}` );
}

contarImpares(15, 65);

