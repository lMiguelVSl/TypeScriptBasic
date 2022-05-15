

interface SuperHeroe {
    nombre : string;
    edad: number;
    direccion : Direccion; //se ler asigna una interfaz ya que es un ojeto que contiene varios atributos 
    mostrarDireccion : () => void;
}
interface Direccion { //interfaz para el atributo direccion 
    calle : string;
    ciudad : string;
    pais : string; 
}
const superHeroe : SuperHeroe = { //creamos la absatraccion o implementacio de la interfaz SuperHeroe
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY' },
        mostrarDireccion () {
            return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.calle + ', ' + this.direccion.pais;
        }
}


const direccion = superHeroe.mostrarDireccion();
console.log(direccion); 