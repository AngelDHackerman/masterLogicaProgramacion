let miFrase = "Esta es una frase para buscar palabras, la frase es corta, pero tiene palabras que podemos necesitar."

const buscar = (frase, busqueda) => { 
  let fraseLowerCase = frase.toLowerCase().replace(/[¡!¿?.,-]/gi, ""); // ? /[]/gi, es como se introducen las expresiones regulares y gi es para que lo haga Global y de manera Indistinta, replace(",", ""); Remplaza todas las comas y puntos por un espacio en vacio, 
  let resultado = 0;

  if (fraseLowerCase.includes(busqueda)) {

    let palabras = fraseLowerCase.split(" "); // ? divide el string en un array de palabras que esten divididas por " ".
    console.log(palabras)

  } else { 
    resultado = 0; 
  }

  return resultado;
}

buscar(miFrase, "palabras")