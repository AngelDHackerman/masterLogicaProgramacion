console.group('Mi respuesta:');
const invertirNumero = (numero) => { 
  if (numero >= 0) { 
    let texto = numero.toString();
    let invertido;
    const reverse = (palabra) => { 
      invertido = palabra.split("").reverse().join("");
    }
    reverse(texto)
    console.log(`Numero original: ${numero}, invertido es: ${invertido}`)

  } else { 
    let texto = (numero * -1).toString();
    let invertido;
    const reverse = (palabra) => { 
      invertido = palabra.split("").reverse().join("");
    }
    reverse(texto)
    console.log(`Numero original: ${numero}, invertido es: -${invertido}`)
  }
}

invertirNumero(-52);
console.groupEnd();


console.group('Respuesta del profe:');



console.groupEnd();