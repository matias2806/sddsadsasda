//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var base;
	var perimetro;
	base = document.getElementById("lado").value ;

	base = parseFloat (base);  //el parseFloat te da la coma el parseint no!

	perimetro = base * 3 ;

	alert ("el perimetro del triangulo es de "+perimetro);


	
}

