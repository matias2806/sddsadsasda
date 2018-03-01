//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
//solo if o swich
/*se ingresan 2 numeros si son iguales se concatenan, si el primero es mayor que el segundo se multiplican
si el segundo es el mas grande se restan, si la multiplicacion da un numero par ademas de mostrar el resultado se muestra
el mensaje es par
*/
function Mostrar()
{
	
	
	var num1;
	var num2;
	var resultado;

	num1 = prompt ("Ingrese el numeo 1");
	while (isNaN (num1) )
	{
		num1 = prompt ("Error! Ingrese un numero 1");
	} 
	num2 = prompt ("Ingrese el numeo 2");
	while (isNaN (num2) )
	{
		num2 = prompt ("Error! Ingrese un numero 2");
	} 
	num1 = parseInt(num1);
	num2 = parseInt(num2);

		if (num1 == num2)
		{
			resultado = num1 +""+ num2 ;
		}
		else if (num1 > num2 )
		{
			resultado = num1 * num2;
				if (resultado % 2 ==0)
				{
					resultado = "es un numero par " + resultado;
				}
		}
		else
		{
			resultado = num1 - num2;
		}

		alert ("Su resultado es "+resultado);
	



}

