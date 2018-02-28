function Mostrar()
{
//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/* el nombre de un animal el peso de este animal validar que el peso sea mayor a 0kg 
	La temperatura del habitat donde vive
	la temperatura puede estar entre -40 y +40  al final debemos informar la cantidad de temperaturas pares ingresadas
	la cantidad de temperaturas impares ingresadas, el nombre del animal mas pesado el nombre del animal menos pesado
	la cantidad de animales cuyo habitat tiene menos de 0 grados el promedio de peso de todos los animales
	la temperatura maxima y la minima ingresada hacerlo */

	var animal;
	var peso;
    var temperatura;
    var respuesta = "si";
    var temperaturasPares =0;
    var temperaturasImpares =0;
    var contadorAnimales =0;
    var pesado;
    var liviano;
    var pesoPesado;
    var pesoLiviano;
    var tempMenorCero=0;
    var acumuladorPeso=0;
    var promPeso;

    while (respuesta != "no")
    {
	    animal = prompt ("Ingrese el nombre de su animal");
        contadorAnimales ++;
	    peso = prompt ("Ingrese el peso del animal");
	    while (isNaN(peso)||peso < 0)
	    {
		    peso =prompt("Incorrecto! Ingrese un peso mayor a 0kg");
	    }
        acumuladorPeso =acumuladorPeso + peso;
        acumladorPeso= parseInt(acumuladorPeso);

        temperatura = prompt ("Ingrese la temperatura del habitat donde vive este animal");
        temperatura= parseInt(temperatura);
       //temperatura -0
        if (temperatura <0)
        {
        tempMenorCero++;
        }
       
        while (isNaN(temperatura) || temperatura < -40 || temperatura >40)
        {
            temperatura = prompt ("Incorrecto!Ingrese la temperatura del habitat donde vive este animal(-40 a +40)");
        }
        respuesta = prompt ("no para salir");
    
        if(temperatura % 2 == 0 && temperatura !=0)
            {
            temperaturasPares++;
            }
            else if( temperatura !=0) //temperatura %2 ==1 && para ver que sea impar
            {
            temperaturasImpares++;
            }

        
//la temperatura maxima y la minima ingresada hacerlo
        if(contadorAnimales==1)
        {
            
        }


//el nombre del animal mas pesado el nombre del animal menos pesado
        if(contadorAnimales == 1)
        {
        pesado = animal;
        pesoPesado = peso;
        liviano = animal;
        pesoLiviano = peso;
        }
        else
        {
            if(pesoPesado < peso)
            {
                pesado = animal;
            }
    //no anda el peso liviano
      
            if(pesoLiviano > peso)
            {
                liviano = animal;
            }
        }


    




    }
    promPeso =acumuladorPeso/contadorAnimales;

document.write("temperaturas pares "+ temperaturasPares);
document.write("<br> temperaturas impares "+temperaturasImpares);
document.write("<br>El nombre del animal mas pesado "+pesado);
document.write("<br>El nombre del animal mas liviano "+liviano);
document.write("<br>Cantidad de animales con temperatura menor a 0 "+tempMenorCero);
document.write("<br>El promedio del peso de los animasles es de "+promPeso);

}
