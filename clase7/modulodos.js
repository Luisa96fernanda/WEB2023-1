/** Modulo 2
 * por defecto usted va exportar esta funcion sumar y la poner
*/
//Export Default significa que por defecto la puedo usar en otra parte

/*export default sumar=(numero1, numero2) =>{
    return numero1+numero2;
}*/

export const nombre ='Juan Perez';

export const suma = (n1,n2)=>{
    return n1+n2;
}

/* otra forma de realizar la importacion
 const nombre ='Juan Perez';

 const suma = (n1,n2)=>{
    return n1+n2;
}
export{nombre,suma};*/

class tienda{
    constructor(codigo,nombre,referencia){
        this.codigo = codigo;
        this.nombre = nombre;
        this.referencia=referencia;
    }
    //metodo
    clasificacion(){
        return `Su codigo es: ${this.codigo} Se llama: ${this.nombre} Su referencia es: ${this.referencia}`;
    }
}

//HERENCIA. palabra clave extends
class papeleria extends tienda{
    constructor(codigo,nombre,referencia,cantidad){
        super(codigo,nombre,referencia)
        this.cantidad=cantidad;
    }
    //metodo
    unidades(){
        return `Su cantidad en unidades es: ${this.sonido}`;
    }
}

let lapiz = new papeleria('123','Marcador','ET230',45);

//Objeto
const reserva = {
    FechaInicio:'12/09/2023',
    FechaSalida: '15/09/2023',
    cantidadPersonas: 2,
    servicios: {
        alimentacion: 'incluye solo desayuno',
        transporte: 'aeropuerto-hotel/ hotel-aeropuerto',
        barralibre: false
    },
    //Metodo
    reservacion:function(){
        return `fecha de llegada ${this.FechaInicio} fecha de salida  ${this.FechaSalida}`
    }
};

const result = ()=> {
    console.log(reserva.reservacion()); 
    return lapiz; 
    
} ;
export{lapiz,reserva,result};
