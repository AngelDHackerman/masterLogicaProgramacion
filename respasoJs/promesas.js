let saludar = new Promise((resolve, reject) => { 
  setTimeout(() => {
    let saludo = "hola muy buenas a todos!"; 
    // saludo = false; // Esta linea se puede descomentar para activar el .catche

    if (saludo ) { //saludo == true
      resolve(saludo);
    } else { 
      reject('no hay saludo disponible');
    }

  }, 2000);
  
});

saludar.then(resultado => { //.then se ejecuta cuando tengamos un resultado
  console.log(resultado)
})
.catch(error => { // .catch se ejecuta cuando tenemos un error 
  console.error(error);
})