const invertirNumero = (numero) => { 
  let string = numero.toString();

  if (numero > 9) { 
    const reverse = (palabra) => { 
      return palabra.split("").reverse().join("");
    }
    
    console.log(`El numero original era: ${numero}, invertido es: ${reverse(string)}`);
  } else {
    console.log(`El numero solo tiene 1 cifra y a la inversa sigue siendo: ${numero}`)
  }
}

invertirNumero(10);