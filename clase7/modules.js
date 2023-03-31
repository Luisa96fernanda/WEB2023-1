/**
 * Modulos en JavaScript
 */
/*
import {sumar} from './modulodos.js'
const saludar=(nombre, apellido)=>{
    let suma = sumar(5,3);
    return `Hola ${nombre} ${apellido} tienes ${suma} vidas`;
}

console.log(saludar('juan','Perez'));
*/

import {nombre, suma} from './modulodos.js';

console.log(nombre);
console.log(suma(5,3));

/**
 * CREAR MINIMO DOS MODULOS
 * 
 * El primer modulo debe tener
 * una clase que hereda de otra
 * un objeto que dentro de sus propiedades tenga otro objeto
 * 
 * Segundo modulo
 * importacion de la clase y el objeto
 * Funcion tipo flecha que realice el uso de la clase y objeto importados
 * 
 * oros adicionales:
 * tercer modulo que contenga:
 * una funcion tipo flecha, que manipule arreglos con los metodos de arreglos
 * debe tener como parametro de entrada el arreglo y una callback function
 * debe poder exportarse.
 */


import {lapiz,reserva,result} from './modulodos.js';

//importacion de la clase y el objeto
console.log(lapiz);
console.log(reserva);
//importacion de la operacion tipo flecha
console.log(result());


