function Mostrar()
{
/*Bienvenidos. 
Realizar el algoritmo que pida el peso en kilos (validar que sea mayor a 0,”cero”) de cada uno de los 50 contenedores (pedir 50 veces) de un deposito por prompt, 
e informar cual fue el más pesado y cuál fue el menos pesado.*/

    var peso;
    var contador =50;
    var pesado;
    var minimo;
   
    while (contador != 0)
        {
            
            peso = prompt ("Ingrese el peso"); 
            while (isNaN(peso) || peso < 0)
            {
                peso=prompt("Error! Ingrese un peso mayor que 0");
            }
            peso= parseInt(peso);
            contador--;
            
            

            if(contador ==49)
            {
            maximo =peso;
            minimo =peso;
            }
            if(peso> maximo)
            {
                maximo = peso;
            }
            if (peso<minimo)
            {
                minimo= peso;
            }

        }

    alert ("El mas pesado fue  " +maximo    +" y el mas liviano fue " +minimo);



}
