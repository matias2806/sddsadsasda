//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*7-Realizar el algoritmo que al presionar el botón "Mostrar" pida por prompt las notas (validar entre 0 y 10) 
	y el sexo(validar el sexo “f” o “m”) de 6 alumnos, informar por alert: 
a) el promedio de las notas totales. 
b) la nota más baja. 
c) la cantidad de varones que su nota haya sido mayor o igual a 6.*/

	var nota;
	var sexo;
	var i; //contador!
	var acumNotas =0;
	var promedio;
	var minimo;
	var contVarones =0;
	var flag =0;

	for(i=0; i<6 ; i++)
	{
		nota =  prompt ("Ingrese su nota");
		nota = parseInt (nota);

		while (nota <0 || nota >10 || isNaN(nota))
		{
			nota =  prompt ("¡¡Error!!Ingrese una nota valida (de 0 a 10)");
			nota = parseInt (nota);	
		}

		sexo= prompt("Ingrese su sexo");
		while(!isNaN(sexo) && sexo != "f" && sexo != "m")
		{
			sexo= prompt("Error!! Ingrese su sexo nuevamente (f o m)");
		}

		acumNotas = acumNotas + nota;
		if (flag ==0 || nota < minimo)
		{
			minimo = nota;
			flag =1;
		}
		if (sexo =="m" && nota >=6)
		{
			contVarones++;
		}

	}

	promedio = acumNotas /i ;

	alert ("promedio :"+promedio+    "minimo : "+minimo+ "Cantidad de varones : "  +contVarones);

	
}

