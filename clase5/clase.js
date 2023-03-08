/* 
* En javascript se lleva funciones en especial la de flecha que es la usada en este curso
*let
*const
*Callback Functions
pop ---- push ---- son las encargadas en arrglos

*/

//funcion tipo flecha con una variable que devuelve un numero
let sumar = (number) => {
    return number +5;
}

/* Funciones asignadas a una variable*/
//a una variable(f) asigarle una funcion
let f = sumar;
//llamo la funcion sumar
console.log(f(5));//usando la funcion
console.log(sumar(5));//usando sumar

/* callback functions 
Enviarle como parametro de entrada a una funcion otra funcion
*/
const esPar =(numero) =>{
    return numero%2 ==0; //regresa valore booleanos valor modulo(%)
}

const ValidarParidad =(num, callbackFn) =>{
    const esPar = callbackFn(num);
    console.log("el numero " +num);
    console.log("el numero es entero? : "+esPar);
}

ValidarParidad(9,esPar);

//segundo ejemplo
//callback functions

const dividePorDos = (numero) =>{
    return numero/2;
}

const divideNumero =(numero, callbackFn) =>{
    return callbackFn(numero);
}

console.log("El numero dividido es: " +divideNumero(10,dividePorDos));

/* Metodos para arreglos */

//arreglo que no se puede modificar
const numeros =[1,2,3,20,893,452];
//arreglo que se puede modificar
let numerosDos =[1,2,3,20,893,452];

// primer metodo .reduce() 
//coge un arreglo y lo reduce a un solo valor
//entro del reduce anexo una funcion reduce((p1,p2)=>{ })
const SumarValores = numeros.reduce((acumulador, valorActual) =>{
return acumulador+valorActual;
}); //dentro resive los parametros de una funcion y luego se le anexa la funcion de flecha

console.log(SumarValores);

/* segundo metodo .forEach() */

const fnDos = numerosDos.forEach(number =>{
    console.log(number);//lo esta imprimiendo en consola solo el array
});

/** tercer metodo .filter() */
const fnTres = numerosDos.filter( number => {
    //como voy a filtrar, la condicion
    return number > 10;
});
console.log(fnTres);

/**cuarto metodo .map() 
 * es mapear
*/
const nombresPersonas = ["Juan","Pedro","Pablo","Andres"];
const anuncios = nombresPersonas.map(miembro => {
    return miembro + " se unio al grupo";
});

console.log(anuncios);


/** Actividad de clase 5 */



/* callback functions 
Enviarle como parametro de entrada a una funcion otra funcion
*/
const nummult =(numero) =>{
    return numero*2; //regresa valore booleanos valor modulo(%)
}

const Validar =(num, callbackFn) =>{
    const nummult = callbackFn(num);
    console.log("el numero " +num);
    console.log("el numero multiplicado * 2 es: "+nummult);
}

Validar(20,nummult);

/** metodo .map() */
const numEdad = [2,4,6,8,10];
const edad = numEdad.map(muestra => {
    return muestra*120;
});

console.log("numeros a multiplicar *120: "+numEdad);
console.log("Se muestra las edades multiplicadas *120: "+edad);


