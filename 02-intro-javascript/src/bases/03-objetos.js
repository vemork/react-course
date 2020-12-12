
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 123456
    }
};

console.log({persona});

/**
 * Esta forma no crea una copia nueva, sino referencia el objeto
 * persona, el cual puede llegar a ser modificado lo cual puede llgar 
 * a ser un error
 */
const persona2 = persona;
persona2.nombre = 'peter';

console.log({persona});
console.log({persona2});


/**
 * para corregir esto puedo usar el operador spread ECMAS6
 * ahora si sera un clon del objeto inicial
 */
const persona3 = {...persona};

/*para imprimir en consola en forma de tabla y poder ver las 
propiedades facilmente.
*/
//console.table(persona);