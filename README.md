# masterLogicaProgramacion

Repasamos sobre las clases y sus herencias y tambien sobre las promesas. 

# verificacion del sistema: 

Debemos tener npm y nodejs instalados en nuestro sistema.

#       Enunciados de los ejercicios
# ejecicio 1: 
-Dado un numero, devolver su tabla de multiplicar completa.

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


# Ejercicio 3: 

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
-Crear un array de palabras de la frase. 
-Mapear esas palabras y hacer un contador de cada una.
-Devolver el contador de la busqueda.
