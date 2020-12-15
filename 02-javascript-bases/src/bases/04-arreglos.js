//Arreglos en js
// const arreglo = new Array();

//arreglo con 100 posiciones vacias 
//y un elemento con valor 1

// const arr = new Array(100);
// arr.push(1);

const arreglo = [1,2,3,4];
//usar push modifica el objeto "arreglo" original
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);

let arreglo2 = arreglo;
//este push modifica el arreglo
//arreglo2.push(5);

//con el operador de propagación se puede copiar el arrelgo además de adicionar 
//el valor de 5
arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map( function(x){
    // si no tengo un return explicito
    // siempre retorna undefined
    return x*2;
} ); 

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
// console.log(arr);


