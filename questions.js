/* (1) Este código está hecho en JavaScript y hay que pasarlo a TypeScript empleando variables “let” y constantes. */
var nombre = "Miguelo";
var edad= 30;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
}; 

/* (2) Crear una interface en TypeScript a partir de este código JavaScript: */
var spiderman = {
    nombre: "Peter parket",
    poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
};

/* (3) Ahora en TypeScript vamos a crear la clase Rombo, la cual debe tener dos propiedades:
DiagonalVertical y DiagonalHorizontal.
Le añadiremos un constructor al que le pasaremos los valores anteriores cuando instanciemos el objeto.
Y también debe de tener un método que calcule el area, que será la multiplicación de DiagonalVertical * DiagonalHorizontal.
Este método devolverá un número. */
 
/* (4) En este ejercicio vamos a cambiar una función normal de javascript a una función de tipo flecha.
Cómo ya sabrás las funciones de flecha no alteran el “this” cuando se corren, por lo que son interesantes para cubrir algunos problemas de JavaScript.*/
function suma( a, b ){
  return (a + b) 
}