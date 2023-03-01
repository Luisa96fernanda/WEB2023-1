

console.log('HOLA MUNDO');//IMPRIMIR EN CONSOLA

/* (mensajess mjulti linea)

//mensaje personalizado

//console.log(Math.random()); //forma de aceder a un metodo con el punto
//int numero;
//float n;
//let //const es la palabra clave javscrip moderno
//var java viejo

//let edad; //declaro la variable
//let age = 20; // declaro la variable y la iniccializo
//let mensaje='Hola queridos usuarios';
//var mensaje2='mensaje 2';// no es un estandar moderno
//let mensaje3='20';

//console.log(mensaje + ' ' + mensaje2);
//console.log(age+ ' ' + mensaje3);

//var mensaje2='20';
//console.log(mensaje2.length)//cantidad de caracteres que tiene el mensaje

//las palabras reservadas no se pueden utilizar en otro lenguaje
//let verdadero = True; let verdadero =null;

=== tipo de dato compara y el valor de tipo de dato
let n= 20;
let age=20;
== comparar tipo de dato 
const no se sabe que tan constante es
const es una constante para no cambiar

//funcion de toda la vida
function sumar(numero1, numero2){
    return numero1+numero;
}

//funcion anonima
function hola(){
    return 'hola';
}

//en javascrpt todo es un objeto

const moneda = 'COP';// si es constante por que el COP no cambia

const NumeroColumnas = 4;
NumeroColumnas = 8;

//funcion anonima
const hola = function(){
    return 'hola';
}

//funcion de flecha basico
const sum = (numero1, numero2) =>{
    return numero1+numero2;
}

let resultado = sum(3,5);
console.log('El resultado es:  '+ resultado);


//funcion flecha con un unico parametro

const multiplicardos = numero =>{
    return numero*2;
}

let result = multiplicardos(3);
console.log(result);

//funcion flecha si no recibe parametros lleva () por que si no quedaria = =>

const con = () =>{
    
}

let resulta = con(14,2);
console.log(resulta);

//funcion de flecha basico
const sum = (numero1, numero2) =>{
    return numero1+numero2;
}

let resultado = sum(3,5);
console.log('El resultado es:  '+ resultado);


//funcion flecha con un unico parametro

const multiplicardos = numero =>{
    return numero*2;
}

let result = multiplicardos(3);
console.log(result);

//funcion flecha si no recibe parametros lleva () por que si no quedaria = =>

const saludar = () =>{
    return 'hola';
}

let re = saludar();
console.log(re);

//esto es un arreglo 
let numeros = [1,2,3,4,5,6];
//ingresar un dato adicional al final del arreglo
numeros.push(10);

//saca el ultimo elemento del arreglo
numeros.pop();

*/

//funcion de flecha basico de dos parametros
const div = (numero1, numero2) =>{
    return numero1/numero2;
}

let resultado = div(14,2);
console.log('El resultado de la division es:  '+ resultado);


//funcion flecha con un unico parametro
const sumarvente = numero =>{
    return numero+20;
}

let result = sumarvente(100);
console.log('el resultado de la suma es: '+ result);

//funcion flecha si no recibe parametros saludi
const saludar = () =>{
    return 'hola';
}

let re = saludar();
console.log(re);

//funcion flecha si no recibe parametros numeros aleatorios
const numale = () =>{
}
console.log('EL numero aleatorio es: '+ numale(),Math.random());


//funcion flecha si no recibe parametros arreglos
let numeros = [1,2,3,4,5,6];
const arr = (vector) =>{
    vector.pop();
    return vector;
}

console.log(arr(numeros));









