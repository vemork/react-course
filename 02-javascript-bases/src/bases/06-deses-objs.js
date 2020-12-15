//Desestructuración
//asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'ironman'
};

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const { nombre } = persona;
console.log(nombre);

//la propiedad nombre2 no se encuentra referenciada 
// dentro del objeto persona, por lo cual nos da un indefined
const { nombre2, edad, clave } = persona;
console.log(nombre2, edad, clave);


const { nombre:nombre3, edad:edad3, clave:clave3 } = persona;
console.log(nombre3, edad3, clave3);



const retornaPersona = (persona) => {
    
    //puedo colocar las referencias en distinto orden
    const {clave, nombre, edad } = persona;
    console.log(nombre, edad, clave);
}

const retornaPersona2 = ({nombre, edad, clave, rango='Capitán'}) => {
    
    //puedo destructrar como argumentos
    // const {clave, nombre, edad } = persona;

    //rango en este caso es un argumento opcional con 
    //valor por omision de capitan
    console.log(nombre, edad, clave, rango);
}

retornaPersona(persona);
retornaPersona2(persona);


const contexto = ({nombre, edad, clave, rango='Capitán'}) => {
    
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lati:123456,
            lngi:789012
        }
    }

}

//const avenger = useContext(personas);

//const {nombreClave, anios, latlng} = contexto(persona);
const {nombreClave, anios, latlng:{lati, lngi}} = contexto(persona);
console.log(nombreClave, anios);
// console.log(latlng);

//imprime un caso especial de obj anidado
console.log(lati, lngi);


