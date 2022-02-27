/* 

1)  split() separará cada carácter de una cadena y lo convertirá en un array.
2)  reverse() tomará esa matriz e invertirá los elementos dentro de ella.
3)  join() unirá los caracteres que han sido invertidos por la función reverse().

*/

const palindromo = (palabra) => { 
  const reverse = (palabra) => { 
    return palabra.split("").reverse().join("");
  }
  let revertido = reverse(palabra);

  if (revertido === palabra) {
    console.log(`La palabra ${palabra} SI es un palindromo!!!`)
  } else { 
    console.log(`La palabra ${palabra} NO es un palindromo`)
  }
}

console.group('Verificando si es palindromo');

palindromo('ana');
palindromo('angel');
palindromo('otto');
palindromo('oscar');

console.groupEnd();









console.group('Mis pruebas:');

    // ? Separamos y lo hacemos string (.split(''))

let ejemplo = 'Angel';
console.log(ejemplo);

const separar = (palabra) => { 
  return palabra.split('');
}
console.log(separar(ejemplo));

    // ? ya hecho array lo invertimos de orden. (.reverse())

let palabraRevertir = separar(ejemplo);
const invertir = (palabra) => {
  return palabra.reverse()
}
console.log(invertir(palabraRevertir));

    // ? invertido el orden y hecho array lo regresamos a string. .join()

let arrayATexto = palabraRevertir;
const unirATexto = (arrayATexto) => { 
  return arrayATexto.join("");
}
console.log(unirATexto(arrayATexto));

console.groupEnd();




