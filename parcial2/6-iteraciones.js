//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*
6-Realizar el algoritmo que al presionar el botón "Mostrar" pida el importe de las ventas 
(validar que sea mayor a 0,”cero”) de los 7 días de la semana por prompt (una por día),
e informar cual fue el mayor importe y cuál fue el menor importe de venta*/	

	var importe;
	var contadorDias =0;
	var maximo;
	var minimo;


	while (contadorDias<7)
	{
		importe = prompt("Ingrese un importe ");
		importe = parseFloat(importe);

		while(importe <= 0 || isNaN(importe))
		{
			importe = prompt("Error!!! Ingrese un importe valido > 0 ");
			importe = parseFloat(importe);
		}
	
		if (contadorDias ==0)
		{
			maximo = importe;
			minimo = importe;	
		}
		else
		{	
			if (maximo < importe)
			{
				maximo = importe;
			}
			if (minimo > importe)
			{
				minimo = importe;
			}
		}

		contadorDias++;
	}

	alert ("El maximo es: "+maximo +"y el minimo es : "+minimo);

}

