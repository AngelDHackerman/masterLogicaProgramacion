    // Funcion para convertir en string el numero y luego invertirlo

let invertido;
const reverse = (palabra) => { 
  invertido = parseInt(palabra.split("").reverse().join(""));
}

    // Codigo que ejecuta el trabajo: 

const invertirNumero = (numero) => { 
  if (numero >= 0) { 
    let texto = numero.toString();

    reverse(texto)
    console.log(`Numero original: ${numero}, invertido es: ${invertido}`)
  } else { 
    let texto = (numero * -1).toString();

    reverse(texto)
    console.log(`Numero original: ${numero}, invertido es: -${invertido}`)
  }
}

invertirNumero(-52);



console.groupEnd('Otra forma mas limpia: ');

const reverseNumber = (numero) => { 

  let invertido = parseInt(
                    numero
                    .toString() // pasa a string el numero
                    .split('') // separa en arrays el string
                    .reverse() // invierte el orden del array
                    .join('') // junta un array. 
                  ) * Math.sign(numero) // ? Muestra el signo del numero

    return invertido;
}

console.log(`El numero invertido es: ${reverseNumber(-78)}`)


console.group();
