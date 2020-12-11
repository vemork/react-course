
//Variables y constantes

/*

NO USAR VAR de ahora en adelante
es mejor trabajar con constantes y let



*/

const nombre = "Emmanuel";
const apellido = "Rubio";

let valorDado = 5;
valorDado = 4;
console.log(nombre, apellido, valorDado);

if (true){
    /* las variables let y const pertenecen al scope del condicional  */
    let valorDado = 6;
    console.log("valorDato Interno "+valorDado);

    const nombre = "Doyler";
    console.log("nombre Interno "+ nombre);
}

console.log("Valor Final del dado :" +valorDado);
