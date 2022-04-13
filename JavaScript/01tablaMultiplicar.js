let tablaMultiplicar = 723;

for (let index = 1; index <= 10; index++) {
  let resultado = tablaMultiplicar * index;

  console.log(`${index} * ${tablaMultiplicar} = ${resultado}`);
}

      // * Respuesta del profesor 

const tablaMultiplicar1 = (numero) => { 
  for (let index = 1; index <= 10; index++) {
    let multipicacion = index * numero;
    console.log(`${index} * ${multipicacion}`)
  }
}

tablaMultiplicar1(5)