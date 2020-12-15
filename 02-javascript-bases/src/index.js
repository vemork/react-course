
const personajes = ['jordan', 'kobe', 'magic'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [ item1, item2, item3 ] = personajes;

console.log(item1, item2, item3);

//para ignorar el primer elemento
const [, pt2] = personajes;
console.log(pt2);

//para ignorar los dos primeros elementos
const [, ,pt3] = personajes;
console.log(pt3);

const retornaArreglo = () => {
    return ['abc', 123];
}

const [letras, nums] = retornaArreglo();
console.log(letras, nums);

const State = (valor) => {
    return [valor, ()=>{console.log('hola Mundo')}];
}

const arr = State("iverson");
arr[1]();

const [nombre, setNombre] = State('Iverson');
// console.log(nombre, setNombre());
console.log(nombre);
setNombre();