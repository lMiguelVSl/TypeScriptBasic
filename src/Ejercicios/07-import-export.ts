import { Producto, calculaISV } from './06-desestructuracion-funcion'; 
//importacion por medio de la desestructuracion del archivo donde solo se llama la interfaz

/*------importacion y exportacion 
Se utiliza copiando la palabra clave "export" al comienzo de la creacion de la interfaz (o funcion) si voy a implementar una interfaz
 ya definida en otro archivo como si fuera una inyeccion de dependencias para asi no tener que modificar en cada archivo
  una interfaz que esta repetida si no en un solo lugar de su creacion 
*/

const carrito : Producto[] = //aca estoy implementando una interfaz que esta en otro archivo 
 [
     {
        desc : 'Portatil',
        precio : 500
    },
    {
        desc : 'Tablero',
        precio : 100
    }
 ]; 

 const [total,isv] = calculaISV(carrito);
 console.log('Total: ',total + '\n' + 'Isv: ',isv);