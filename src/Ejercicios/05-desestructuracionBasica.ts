
interface Reproductor { 
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles; //obj
}

interface Detalles{ //interface para el obj
    autor:string;
    anio:number;
}

const reproductor : Reproductor = { //creacion del objeto que viene de reproductor 
    volumen : 90,
    segundo : 36,
    cancion: 'Mess',
    detalles: {
        autor : 'Ed Sheeran',
        anio : 2015
    }
}


//------sin desestructuracion
console.log('Volumen actual: ', reproductor.volumen);
console.log('Segundo actual: ',reproductor.segundo);
console.log('Cancion actual: ', reproductor.cancion);
console.log('Autor: ', reproductor.detalles.autor);

//------------Desestructuracion
const {volumen, segundo, cancion,detalles} = reproductor; //se le asignan los valores del mismo tipo para que no sea necesario nombrarlo siempre
const {autor,anio} = detalles; // desestructurar un objeto dentro de otro objeto 

console.log('Volumen actual: ',volumen);
console.log('Segundo actual: ',segundo);
console.log('Cancion actual: ',cancion);

///--------------arreglo
const dbz : string [] = ['Goku', 'Vegeta', 'Trunks'];
console.log(
'Personaje 1: ', dbz[0] + '\n' +
'Personaje 2: ',dbz[1] + '\n' + 
'Personaje 3: ',dbz[2]); //impresion de un arreglo de forma basica 

//----desestructuracion de un arreglo

const [,p2,] = dbz; //importa el orden de las declaraciones y el orden en el que se encuentra el valor en el arreglo 
console.log('Personaje 2: ', p2);
