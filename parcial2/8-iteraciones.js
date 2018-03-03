//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/* el nombre de un animal el peso de este animal validar que el peso sea mayor a 0kg 
	La temperatura del habitat donde vive
	la temperatura puede estar entre -40 y +40  al final debemos informar la cantidad de temperaturas pares ingresadas
	la cantidad de temperaturas impares ingresadas, el nombre del animal mas pesado el nombre del animal menos pesado
	la cantidad de animales cuyo habitat tiene menos de 0 grados el promedio de peso de todos los animales
	la temperatura maxima y la minima ingresada hacerlo */
function Mostrar()
{
	/*alert("Funciona 8-iteraciones");
	
	var animal;
	var peso;

	animal = prompt ("Ingrese el nombre de su animal");
	peso = prompt ("Ingrese el peso del animal");
	while (peso < 0)
	{
		peso =prompt("Incorrecto! Ingrese un peso mayor a 0kg");
	}
	*/

	var numero;
	var seguir =true;
	var cantPares =0;
	var acumulador=0;
	var promedio;
	var contador =0;
	var flag = false;
	var maximo;
	var minimo;

	while (seguir ==true )
	{
		numero = prompt ("ingrese un numero");
		numero = parseInt (numero);
		while (numero<=0)
		{
			numero = prompt ("Ingrese un numero");
			numero = parseInt(numero);
		}

	if(numero %2 ==0)
	{
		cantPares++;
	}
	acumulador=acumulador + numero;


	if(flag ==false || numero <minimo)
	{
		minimo = numero;
	}
	if (flag ==false || numero <maximo)
	{
		maximo =numero;
		flag =true;
	}


		contador++;
		seguir = confirm ("Desea ingresar otro?");
	}

	promedio = acumulador / contador;




	document.write("Promedio: " +promedio);
	document.write("<br> aumatoria: " +acumulador);
	document.write("<br> maximo: " +maximo + "minimo"+minimo);
}

