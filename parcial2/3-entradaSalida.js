//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo;
	var ancho;
	var perimetro
	var alambre;
	largo = document.getElementById('largo').value;
	ancho = document.getElementById("ancho").value;

	ancho = parseInt(ancho);
	largo = parseInt(largo);

	perimetro= 2*ancho + largo*2;

	alambre = perimetro * 6

	alert ("Se necesitan : "+alambre + " mts de alambre");
}

