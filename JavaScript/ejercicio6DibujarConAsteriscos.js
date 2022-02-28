const dibujar = (medida) => { 
  let cuadro = '';
  const arribaAbajo = () => { 
    for (let i = 1; i <= medida; i++) { 
      cuadro += '*';
      if (i == medida) { 
        cuadro += '\n';
      }
    }
  }
  arribaAbajo();

  const lados = () => { 
    for (let j = 1; j <= medida; j++) { 
      if (j == 1 || j == medida) { 
        cuadro += '*';
      } else if (j !=1 || j != medida) { 
        cuadro += ' ';
      }
    }
    cuadro += '\n';
  }
  for (let k = 1; k <= medida -2; k++) { 
    lados();
  }
  arribaAbajo();
  

  console.log(cuadro)
}
dibujar (20);
