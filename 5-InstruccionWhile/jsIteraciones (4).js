function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	
	while (numero < 0 || numero > 9)
	{
		alert ("este no es un numero entre 0 y 9");
		numero = prompt("ingrese un número entre 0 y 10.");
	}
	
	document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN