function Mostrar()
{
	var numero;
	var acumuladorNeg=0;
	var acumuladorPos=0;
	var contadorPos=0;
	var contadorNeg=0;
	var contadorCeros=0;
	var contadorDePares=0;

	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero = parseInt (prompt ("ingrese un numero"));

		if(numero > 0)
			{
			acumuladorPos = numero + acumuladorPos;
			contadorPos++;
			}
		else if (numero == 0)
			{
			contadorCeros++;
			}
		else 
			{
			acumuladorNeg = numero + acumuladorNeg;
			contadorNeg++;
			}

		if	(numero % 2==0)
			{
			contadorDePares++;
			}
		respuesta = prompt ("Quiere cargar otro numero?");	
	}

	//1 suma neg
	document.write ("Suma de negativos " +acumuladorNeg+"<br>");
	//2 suma posi
	document.write ("Suma de Positivos " +acumuladorPos+"<br>");
	//3 cantidad de pos
	document.write ("Cantidad de Positivos " +contadorPos+"<br>");
	//4 cantidad de neg
	document.write ("Cantidad de Negativos " +contadorNeg+"<br>");
	//5 cantidad de ceros
	document.write ("Cantidad de Ceros " +contadorCeros+"<br>");
	//6 cant numeros pares
	document.write ("Cantidad de numeros pares " +contadorDePares+"<br>");
	//7 Promedio de positivos
	document.write ("Promedios de Positivos " +acumuladorPos/contadorPos +"<br>");
	//8Promedio de negativos
	document.write ("Promedios de Negativos " +acumuladorNeg/contadorNeg +"<br>");
	//9 dif entre positiv y neg (posit - neg)
	if(acumuladorPos > acumuladorNeg)
		{
	document.write ("Diferencia entre positivo y negativo " +(contadorPos  - contadorNeg  ) );
		}
	else
	 {
	document.write ("Diferencia entre positivo y negativo " + (contadorNeg - contadorPos ) );	 
	 }


}//FIN DE LA FUNCIÓN