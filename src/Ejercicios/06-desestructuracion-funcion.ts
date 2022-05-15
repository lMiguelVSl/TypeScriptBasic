
export interface Producto {
    desc : string;
    precio : number;
}

const celular : Producto = {
    desc : 'Iphone',
    precio : 1000
}

const tv : Producto = {
    desc : 'Sansumng',
    precio : 1500
}

export function calculaISV ( productos : Producto[]) : [number,number] //function que recibe un parametro de tipo Array de Producto y le digo que retorna un array de dos numeros
{
    let total = 0;

   /* productos.forEach((producto : Producto) => al parametro ya que es un arreglo le puedo implementar un forEach y el parametro es del tipo de la interfaz
    {
        total+=producto.precio;
    }) */

    //--desestruturando el argumento
    productos.forEach(({ precio  }) => {total += precio; })

   // return total * 0.15;
   return [total, total * 0.15];
}

const articulos = [celular,tv]; //creo el arreglo para poder mandarlo como parametro a la funcion
const isv = calculaISV(articulos); //creo una constante donde voy a guardar el resultado de la funcion que retorna un number y a la function le envio el arreglo 
//console.log("ISV: ",isv); 

//--desestructuracion de la funcion 

const [total,ISV] = calculaISV(articulos); 
//console.log('Total: ', total + '\n' + 'ISV: ',ISV); //imprimo usando los nombre de la desestructuracion de la funcion 