console.group('Mi respuesta:')
const dibujar = (medida) => { 
  let cuadro = '';
  const arribaAbajo = () => { // * Lados de arriba y abajo
    for (let i = 1; i <= medida; i++) { 
      cuadro += ' *';
      if (i == medida) { 
        cuadro += '\n';
      }
    }
  }
  arribaAbajo(); // ? Creado el lado de arriba

  const lados = () => { // * Laterales del cuadrado
    for (let j = 1; j <= medida; j++) { 
      if (j == 1 || j == medida) { 
        cuadro += ' *';
      } else if (j !=1 || j != medida) { 
        cuadro += '  ';
      }
    }
    cuadro += '\n';
  }
  for (let k = 1; k <= medida -2; k++) { 
    lados(); // * creando los laterales
  }
  arribaAbajo();
  

  console.log(cuadro)
}
dibujar (9);
console.groupEnd();


        // ! Respuesta del profesor.

console.group('Respuesta del profesor:');
const resLado = (numero) => { 
  let lado = '';

  for (let i = 0; i < numero; i++) { 
    lado += ' *';
  }
  return lado;
}

const resCuadrado = (numero) => { 
  let dibujo = resLado(numero) + '\n';

  let contenido = ''; 

  for (let i = 0; i < (numero - 2); i++) {
    contenido = ' *';
    
    for (let j = 2; j < numero; j++) {
      contenido += '  ';
    }

    contenido += ' *';

    dibujo += contenido + '\n';
  }

  dibujo += resLado(numero);
  return dibujo;
}

console.log(resCuadrado(9))
console.groupEnd();












