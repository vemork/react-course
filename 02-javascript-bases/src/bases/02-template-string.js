console.log("hola mundo");

/* 

Template string 

facilita la integración de strins con variables todo lo que vaya dentro de {...} llaves son 
expresiones que pueden ser evaluadas
*/

const nombre = "Emmanuel";
const apellido = "Apellido";

const nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

const nombreCompleto2 = `${nombre} ${apellido}`;
console.log(nombreCompleto2);

/** los string templates pueden soportar saltos de línea */
const nombreCompleto3 = `
${nombre}
${apellido}
`;
console.log(nombreCompleto3);

//incluso puedo evaluar expresiones propias de JS
console.log(`${1 + 4}`);

//incluso el llamado a una funcion

function getSaludo() {
  return "Hola Mundo";
}

console.log(`Este es un saludo :  ${getSaludo()}`);

function getSaludoNombre(nombre) {
    return "Hola Mundo, " + nombre;
}

console.log(`Este es un saludo :  ${getSaludoNombre(nombre)}`);

//Esto genera Error se debe colocar siempre ${nombre}
// const nombreCompleto3 = `${nombre apellido}`;
// console.log(nombreCompleto3);
