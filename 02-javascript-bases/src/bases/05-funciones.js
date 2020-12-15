// function saludar(nombre) {
//     return `Hola, ${nombre}`;
//   }
  
// se debe tener precaución pues por ejemplo 
// la función anterior podría ser afectada 
// por una variable del tipo

// saludar =30; 

// agregar la referencia de la función como una constante
// nos permite evitar el comportamiento anterior
const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

console.log(saludar("Emmanuel"));

//la misma funcion saludar pero en Arrow function
const saludar2 =  (nombre) => {
    return `Hola, ${nombre}`;
}

//si la funcion internamente solo es un return 
// se puede simplificar así
const saludar3 =  (nombre) =>  `Hola, ${nombre}`;


console.log(saludar2("manolo"));
console.log(saludar3("jordan"));


const getUser = () => {
    return{
        uid: 'ABC123',
        username: 'login123'
    }
}

//simplificando la funcion anterior
const getUser2 = () => ({
        uid: 'ABC123',
        username: 'login123'
});

console.log(getUser());
console.log(getUser2());


// function getUsuarioActivo(nombre){
//     return{
//         uid: 'ABC123',
//         username: nombre
//     }
// };

const getUsuarioActivo = (nombre) => ({
        uid: 'ABC123',
        username: nombre
    
});

const usuarioActivo = getUsuarioActivo("Emmanuel");
console.log(usuarioActivo);

