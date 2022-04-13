let miFrase = "Esta es una frase para buscar palabras, la frase es corta, pero tiene palabras que podemos necesitar."

const buscar = (frase, busqueda) => { 
  let fraseLowerCase = frase.toLowerCase().replace(/[¡!¿?.,-]/gi, ""); // ? /[]/gi, es como se introducen las expresiones regulares y gi es para que lo haga Global y de manera Indistinta, replace(",", ""); Remplaza todas las comas y puntos por un espacio en vacio, 
  let resultado = 0;

  if (fraseLowerCase.includes(busqueda)) {

    let palabras = fraseLowerCase.split(" "); // ? divide el string en un array de palabras que esten divididas por " ".
    let mapa = {};

    for (let palabra of palabras) { // * for of consigue el VALOR dentro del los indices del array.
      
      if(mapa[palabra]) { // * Esto comprueba si la palabra ya esta en el mapa que creamos.
        mapa[palabra]++; // * Si la palabra YA existe le suma 1 al valor que ya tiene (por defecto es 1)
      } else { 
        mapa[palabra] = 1; // * Si la palabra aun no existe en el mapa con esto la agregamos y le damos valor de 1.
      }
    }
    console.log(palabras);
    console.log(mapa);

    resultado = mapa[busqueda];

  } else { 
    resultado = 0; 
  }

  return resultado;
}

console.log(`La palabra que buscamos aparece:`, buscar(miFrase, 'talvez'), `veves`);