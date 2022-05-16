//----CLASS
/* a diferencia de unaionterfaz puedo implementar un metodo dentro de la misma clase y en una interfaz solo la puedo definir y su tipo de retorno */
class PersonaNormal {
   constructor (
       public nombre: string,
       public direccion: string
   ){}
}
class Hero extends PersonaNormal {
     //forma clasica de la implementacion de las propiedades y un costructor para una clase
    /*public alterEgo: string;
    public edad: number;
    public nombreReal: string;

   constructor (AlterEgo: string, Edad: number, NombreReal: string){
        this.alterEgo = AlterEgo;
        this.edad = Edad;
        this.nombreReal = NombreReal;
    }*/
    //forma mas comun de ver de la declaracion de las propiedades y el constructor de una clase 
    constructor (  //se declaran las propiedades dentro del mismo constructor y a su vez son un requisito para la implementacion de la clase
        public alterEgo: string,
        public  edad: number,
        public nombreReal: string
        ) {
            super(nombreReal,'New York')
        } 

}

const ironMan = new Hero('IronMan', 31, 'Tony Stark');
console.log(ironMan);