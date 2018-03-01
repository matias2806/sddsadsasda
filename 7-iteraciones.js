//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var sexo;
	var cantidadAlumnos = 6;
	var acumuladorNotas=0;
	var promedioNotas=0;
	var notaMin;
	var acumuladorVaronesAprobados=0;

	while (cantidadAlumnos >0)
	{
	cantidadAlumnos--;
	
		nota = prompt ("Ingrese su nota");

		while (isNaN (nota) || nota < 0 || nota > 10 )
		{
			nota = prompt ("Error! Ingrese una nota entre 0 y 10");
		}
		nota= parseInt(nota);
		acumuladorNotas=acumuladorNotas + nota;

		sexo = prompt ("Ingrese su sexo");

		while (sexo != "m" && sexo !="f" )
		{
			sexo = prompt ("Error! Ingrese nuevamente su sexo f o m");
		}

	if (cantidadAlumnos == 5)	
		{
			notaMin = nota;
		}
	if (nota < notaMin)
		{
		notaMin = nota;
		}


	if (sexo == "m" && nota >= 6)
		{	
			acumuladorVaronesAprobados++;
		}

	}
	promedioNotas=acumuladorNotas /6;

	alert ("El promedio de las notas es  "+promedioNotas +"     La nota mas baja es     "+notaMin +"        La cantidad de varones con nota mayor a 6 son    "+acumuladorVaronesAprobados);
}

