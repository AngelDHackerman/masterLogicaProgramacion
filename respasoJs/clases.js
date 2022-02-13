class Coche { 
  constructor (modelo, velocidad, antiguedad) {
    this.modelo = modelo;
    this.velocidad = velocidad;
    this.antiguedad = antiguedad;
  }
  aumentarVelocidad () { 
    this.velocidad ++;
  }
  reducirVelocidad () { 
    this.velocidad --;
  }

}

let myAuto = new Coche('bmw', 200, 2021);
let auto2 = new Coche('toyota', 120, 1990);

console.log(myAuto);

myAuto.aumentarVelocidad();
myAuto.aumentarVelocidad();
myAuto.aumentarVelocidad();
myAuto.aumentarVelocidad();
myAuto.aumentarVelocidad();
myAuto.aumentarVelocidad();
myAuto.aumentarVelocidad();
myAuto.aumentarVelocidad();

console.log(myAuto);

        // Herencia

class Autobus extends Coche { // ! La calse autobus va a tener los mismos valores que la clase coche
  constructor (modelo, velocidad, antiguedad) { 
    super (modelo, velocidad, antiguedad);    // ? super accede a los valores de la clase padre.
    this.altura = 5; 
  }

  mostrarAltura () { 
    return `La altura del autobus es ${this.altura} metros`
  };
}

let autobus1 = new Autobus('Pegasus', 180, 2015);
console.log(autobus1);

console.log(autobus1.mostrarAltura())