# masterLogicaProgramacion

Repasamos sobre las clases y sus herencias y tambien sobre las promesas. 

# verificacion del sistema: 

Debemos tener npm y nodejs instalados en nuestro sistema.

#       Enunciados de los ejercicios

* En español por fines didacticos, en la vida real usaremos nombres en ingles.
* Test en cada ejercicio, lo veremos al final del proyecto para agilizar el proceso.
* ejercicios genericos, puedes usar cualquier lenguaje.
* Siempre mostrar el resultado en la consola / terminal.
* Hay muchas soluciones validas para un mismo ejercicio.*
# ejecicio 1 'Tabla de multiplicar': 
* Dado un numero, devolver su tabla de multiplicar completa.

  Ejemplos: 
tabaMultiplicar(5);

  Me devuelve este resultado: 
1 x 5 = 5
2 x 5 = 2
3 x 5 = 15
4 x 5 = 20
5 x 5 = 25 
||  || || 
10 x 5 = 50


# Ejercicio 2 "palindromo": 

Dada una cadena de texto, comprobar si es un palindromo o no. 
Los palindromos son palabras que se leen igual aun estando invertidas.

Por ejemplo: 
ana, bob, otto, allivessevilla.

No tener en cuenta espacios o simbolos raros.


palindromo(otto) // is true.
palindromo(angel) // is false.


# Ejercicio 3, 'Buscar la palabra': 

Enunciado: 

Dada una palabra, busrcala en una frase y delver cuantas veces aparece en ella.
La frase y la palabra deben ser parametros de una funcion.

Ejemplos: 
Coincidencias("Hola soy una palabra en una frase, PALABRA.", "palabra") // Devuelve: 2.
coincidencias("soy la frase", "victor") // Devuelve: 0.

Como hacerlo: 
* Funcion con 2 parametros, "frase" y "busqueda"
* Poner string en minusculas y limpiarlo. 
* comprobar si la busqueda esta incluida en la frase.
* Crear un array de palabras de la frase. 
* Mapear esas palabras y hacer un contador de cada una.
* Devolver el contador de la busqueda.

# Ejercicio 4, 'Invertir la palabra': 

Enunciado: 

* Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres, sin usar metodos propios del lenguaje, solo estructuras de control.

Ejemplos: 

* invertir('hola') // Devuelve: 'aloh'
* invertir('victor') // Devuelve: 'rotciv'
* invertir('robles') // Devuelve: 'selbor'

Como hacerlo: 

- Funcion con parametro "texto"
- Crear una variable para guardar la cadena invertida
- Bucle que recorra el string letra a letra y guarde los caracteres en la variable.

# Ejercicio 5, 'Tanto por ciento': 

* Enunciado: 

- Cuanto es el x por ciento de x numero? 

* Ejemplos: 

- tantoPorCiento(20, 100)     // Devuelve: 20.
- tantoPorCiento(43, 897)     // Devuelve: 385.71
- tantoPorCiento(50, 10)     // Devuelve: 5.

* Como hacerlo: 

- Funcion con parametros 'porcentarje' y  'numero'. 
- Crear una variable para la operacion del porcentaje.
- Devolver string que responda a la pregunta el enunciado. 

# Ejercicio 6, 'Dibujar con asteriscos':

* Enunciado: Dibujar un cuadro hueco con asteriscos. 

* Ejemplos: 

cuadrado(4);

// Devuelve: 
  4 * en el tope 
  4 * en los horizontales 
  4 * en el fondo

* Como hacerlo: 

- Funcion para crear el lado de arriba y abajo del cuadrado 
- funcion que haga los lados y el hueco del cuadrado.
- Bucle de 0 al tamaño del lado menos 2 para equilibrar con el lado de arriba y abajo.
- Ir concatenando en una variable cada linea del cuadrado. 
- Mostrar el cuadrado en la funcion principal.

# Ejercicio 7, contar los impares entre 2 numeros.

* Enunciado: 
  Dados dos numero, devolver cuantos numeros impares hay entre ellos. 

* Ejemplos: 

- Entre 1 y 10 // Devuleve 4, (3, 5, 7, 9);

* Como hacerlo: 
- Funcion que reciba los 2 numeros.
- Bucle de nuemro1  al numero2
- Condicion, si el resto es distinto a cero, es impar.
- Aumentar en uno el contador. 
- Devolver contador.

# Ejercicio 8

* Enunciado: 
  Dado un numero entero, inviertelo y devuelve de nuevo el entero.

* Ejemplos: 

- invertirNumero(67) // Devuelve: 76;

* Como hacerlo: 

- Funcion que reciba el numero. 
- Convertir numero en string.
- Crear un array por cada letra.
- Darle la vuelta.
- Unir el array en un string. 
- Convertir el string en un entero.
