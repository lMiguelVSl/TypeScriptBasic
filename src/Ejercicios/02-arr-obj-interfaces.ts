
let habilidades = [1,"Miguel",true]; // any es tipo especial de dato en TS -no es recomendable porque es muy flexible 

let hailidadesString = ["bash",'counter','Healing',100]; //TS intenta desifrar que estamos ingresando

let ArrayEspecificando : (boolean | string | number)[] = [ true,'Miguelinho', 1]; //definiendo los tipos

let ArrayString : string[] = ['Miguelingo']; //se especifica, de esta forma se debe de hacer 

//------objetos en TS
interface Personaje { //plantilla para la creacion, no se usan en JS 
    nombre : string,
    hp:number,
    habilidades : string[],
    puebloNatal? :string //es un atributo opcional por el ?
}
const personaje : Personaje = {
    nombre : 'Strider',
    hp:100,
    habilidades: ['bash','volar'] //ejemplo sin el atributo y no muestra error
} //objeto sin tipo

personaje.puebloNatal = 'Jerico'; //asignarle valor a un atributo luego de la creacion del mismo objeto

console.table(personaje); //imprime el objeto por consola 

