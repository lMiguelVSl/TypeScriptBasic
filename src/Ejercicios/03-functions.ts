
//funciones 
 function sumar (a,b) {
     return a+b;
 } //es una funncion pero no necesariamente suma dos numeros ya que no se especifica

 const resultado = sumar('Miguel',' Vargas');

 console.log('Result simple function sum' + resultado);

 //tipado stricto 
 function sumarEstricto (a:number,b:number) :number {
     return a+b;
 } //forma de darle el tipo de valor a los argumentos y para asignar el tipo de valor que se desea retornar   

 //---------arrow function
 const sumarFlecha = (a,b) => {
     return a+b;
 } //sin tipo 
 const resultadoSumFlecha = sumarFlecha(1,1);
 console.log('Suma without especified tipe' + resultadoSumFlecha);

 const sumaTipo = (a:number,b:number) :number => {
     return a+b;
 } //function con el tipo de retorno especificado 
const SumaConTipo = sumaTipo(5,5);
console.log("Function plus with tipe defined" + SumaConTipo);

//function with atributes didn't use

function TiposArgumentos (numero : number, otroNumero? : number, base : number = 1) : number //orden, definidos, opcional y definidos 
{
    return numero * base; 
} //si al llamar la funcion solo le agregamos un numero igual va a retornar un valor ya que la base ya esta definida 


//---------interface
interface PersonajeOV { //se crea la plantilla con los atributos obligatorios para las implementaciones de la interfaz 
  nombre : string,
  pv : number 
}

//-----function que recibe un objeto
function curar (personaje : PersonajeOV ,curarX) : void { //todos los argumentos son de tipo any si no se definen
    personaje.pv += curarX;

    console.log(personaje);
} //function de no retorno, lo que no se recomienda es que aun no sabemos como luce un personaje ni el tipo de dato del argumetno curar



//----creacion de objeto
const personajeNew : PersonajeOV = { //creamos un nuevo personaje que viene de la interfeaz PersonajeOV y le asignamos los valores a los atributos 
    nombre : 'Miguel',
    pv : 50
}

curar(personajeNew,50); //enviamos este nuevo personaje a la funcion ya creada para acumular los puntos  de vida que ingresemos con los que tenia el personaje 

//----interface con funcion como propiedad 

interface Miguelinho {
    nombre : string,
    metodoDeMiguelinho: () => void //creacion de la funcion dentro de la interfaz 
}

const miguelihno : Miguelinho = {
    nombre : 'Miguelinho do brasil',
    metodoDeMiguelinho () {
        console.log('eu voe a correr'); //implementacion de la funcion de la interfaz en la creacion del objeto 
    }
}
