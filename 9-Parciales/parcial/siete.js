function Mostrar()
{
/*ingresar una letra y un numero (2 datos) los numeros entre -50 y +50, -1 informar el promedio de los numero positivos
2 la cantidad de numeros impares- 3 la suma de todos los numeros cuya letra haya sido una vocal -
4 el numero maximo y la letra con la cual fue ingresado.*/

    var numero;
    var letra;
    var promPositivos=0;
    var acumPositivos=0;
    var acumNumImpares=0;
    var bandera = "si";

    letra = prompt ("Ingrese una letra");
    numero = parseInt (prompt ("Ingrese un numero del -50 al 50"));  
    bandera =  prompt ("Desea ingresar otro numero");

    while(bandera !== "no")
    {
    letra = prompt ("Ingrese una letra");
        while(!isNaN (letra))
        {
        letra = prompt ("Ingrese una letra");
        }

    numero = parseInt (prompt ("Ingrese un numero del -50 al 50"));      
        
        while(numero < -50 || numero >50 || isNaN(numero) )
        {
        numero = parseInt (prompt ("Error!.Ingrese un numero del -50 al 50"));
        }

        if(numero >0)
        {
        acumPositivos++;
        promPositivos = numero  + promPositivos;
        }
//  (2)cantidad de numeros impares
        if( (numero %2) !== 0)
        {
        acumNumImpares++;
        }
//3 la suma de todos los numeros cuya letra haya sido vocal


    bandera =  prompt ("Desea ingresar otro numero");
    }  
       
    
promPositivos=promPositivos/acumPositivos;

document.write("El promedio de los numeros positivos es "+ promPositivos);
document.write("<br>La cantidad de numeros impares es de "+ acumNumImpares);
}
