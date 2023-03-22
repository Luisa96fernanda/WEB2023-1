/**
 * Declaracion de objetos
 * let
 * const
 */

//Objetos

/*const persona = {
    primerNombre:'Juan',
    apellido: 'Perez',
    edad: 22,
    documentoIdentidad: 5612,
    //Metodo
    saludar:function(){
        return `hola ${this.primerNombre} ${this.apellido}`
    }
};
//Accediendo al metodo
console.log(persona.saludar());
//Acceder a una propiedad. forma1
console.log(persona.apellido);
//Acceder a una propiedad. segunda forma 
console.log(persona['primerNombre']);*/

//este es un objeto dentro de otro objeto
const persona = {
    primerNombre:'Juan',
    apellido: 'Perez',
    edad: 22,
    documentoIdentidad: 5612,
    caracteristicas: {
        colorCabello: 'Rojo',
        etnicidad: 'Indoeuropeo',
        idiomaMaterno: 'Español'
    },
    //Metodo
    saludar:function(){
        return `hola ${this.primerNombre} ${this.apellido}`
    }
};
//Acceder al metodo general
console.log(persona);



//clases

class Persona{
    constructor(primerNombreUsu,apellidoUsu){
        this.primerNombreUsu = primerNombreUsu;
        this.apellidoUsu = apellidoUsu;
    }
    //metodo
    saludarpersona(){
        return `Hola ${this.primerNombreUsu} ${this.apellidoUsu}`
    }
};

//usar la clase para Crear una nueva persoona (objeto)
const Personita = new Persona('Juan','Perez');
//Acceso al metodo
console.log(Personita);
//Acceder a una funcion especifica dentro de la clase (Metodo)
console.log(Personita.saludarpersona());
//objeto que puede ser cambiado con let 
let Personitaa = new Persona('Juan','Perez');
Personitaa.primerNombreUsu='Carlos';
Personitaa.apellidoUsu='Cantor';
console.log(Personitaa.saludarpersona());

//Herencia

class Animales{
    constructor(nombre,edad,sonido){
        this.nombre = nombre;
        this.edad = edad;
        this.sonido=sonido;
    }
    //metodo
    sonido(){
        return `${this.nombre} Tiene el sonido: ${this.sonido}`;
    }
}

//HERENCIA. palabra clave extends
class Gatos extends Animales{
    //Constructor de la clase gatos 
    constructor(nombre,edad,sonido,cazador){
        //inicializacion de lo que hereda
        super(nombre,edad,sonido)
        //inicializa la nueva funcion de esta herencia
        this.cazador=cazador;
    }
    //metodo
    maullar(){
        return `Yo puedo hacer el sonido ${this.sonido}`;
    }
}
//crear un animal, especificamente un gato

let gato = new Gatos('ALBERTO',52,'Meow',true);
console.log(gato);


//ACTIVIDAD
//1. crear un objeto que tenga minimo dos metodos
//ademas debe tener una propiedad que sea un objeto

const tablaNutricional = {
    Nombre:'Sara',
    Apellido: 'Correa',
    Edad: 7,
    DocumentoIdentidad: 1000,
    Medicion: {
        Peso: '23kg',
        Talla: '100 cm',
    },
    //Metodo
    Paciente:function(){
        return `El paciete ${this.Nombre} ${this.Apellido} , Idenfiticado con Documento de Identidad ${this.DocumentoIdentidad} Presenta la siguientes Mediociones Talla: ${this.Medicion.Talla}, Peso: ${this.Medicion.Peso}`
    },
    identificacion:function(){
        return `Nombre: ${this.Nombre} Apellido: ${this.Apellido} Edad: ${this.Edad}`

    } 
};
console.log(tablaNutricional.identificacion()+' '+tablaNutricional.Paciente());

//2. crear una clase que herede de otra. Debe poseer minimo 3 propiedades constructor

class paises{
    constructor(codigo,nombrepais){
        this.codigo = codigo;
        this.nombrepais = nombrepais;
    }
    //metodo
    presentacion(){
        return `Su Codigo es: ${this.codigo} Se llama: ${this.nombrepais}`;
    }
}

//HERENCIA 1
class colores extends paises{
    constructor(codigo,nombrepais,color){
        super(codigo,nombrepais)
        this.color=color;
    }
    //metodo
    muestra(){
        return `su color caracteristico es:  ${this.color}`;
    }
}

//HERENCIA 2
class habitantes extends colores{ 
    constructor(codigo,nombrepais,color,numeroHabitantes){
        super(codigo,nombrepais,color)
        this.numeroHabitantes=numeroHabitantes;
    }
    //metodo
    totalidad(){
        return `La cantidad de habitantes es:  ${this.numeroHabitantes}`;
    }
}

let banderas = new habitantes('7','Alemania','negro + amarillo + rojo',450);
console.log(banderas);

//3. crear una funcion flecha que haga uso de la clase Construida y el objeto declarado.


