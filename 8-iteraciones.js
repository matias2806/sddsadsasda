//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/* el nombre de un animal el peso de este animal validar que el peso sea mayor a 0kg 
	La temperatura del habitat donde vive
	la temperatura puede estar entre -40 y +40  al final debemos informar la cantidad de temperaturas pares ingresadas
	la cantidad de temperaturas impares ingresadas, el nombre del animal mas pesado el nombre del animal menos pesado
	la cantidad de animales cuyo habitat tiene menos de 0 grados el promedio de peso de todos los animales
	la temperatura maxima y la minima ingresada hacerlo 
function Mostrar()
{
	alert("Funciona 8-iteraciones");
	var animal;
	var peso;
	animal = prompt ("Ingrese el nombre de su animal");
	peso = prompt ("Ingrese el peso del animal");
	while (peso < 0)
	{
		peso =prompt("Incorrecto! Ingrese un peso mayor a 0kg");}*/


function Mostrar()
{
	/*Realizar el algoritmo que al presionar el botón "Mostrar" permita ingresar números positivos (validar que sea positivo) hasta que el usuario quiera.
a) la cantidad de números pares. 
b) el promedio de todos los números ingresados. 
c) la suma de todos los números. 
d) El número máximo y el mínimo.  */

	var numero;
	var bandera = "si";
	var cantidadPares =0;
	var acumuladorNum =0;
	var contadorNum=0;
	var promedio;
	var maximo;
	var minimo;

	
	while( bandera != "no")
	{
		numero = prompt ("Ingrese un numero");

		while (isNaN(numero) || numero < 1)
		{
			numero = prompt ("Error! Ingrese un numero mayor que  0");
		}
		numero= parseInt(numero);
		acumuladorNum = acumuladorNum + numero;
		contadorNum++;

	if (numero %2 == 0)
	{
		cantidadPares++;
	}

	if (contadorNum ==1)
	{
		maximo = numero;
		minimo = numero;
	}
	if (numero > maximo)
	{
		maximo = numero;
	}
	if (numero < minimo)
	{
		minimo= numero;
	}


	bandera = prompt ("Desea ingresar otro numero, no para salir");
	}
promedio= acumuladorNum/contadorNum

document.write ("la cantidad de numeros pares son "+cantidadPares);
document.write ("<br>El promedio de todos los numeros son "+promedio);
document.write ("<br>la suma de todos los numeros "+acumuladorNum);
document.write ("<br>El maximo es "+maximo);
document.write ("<br>El minimo es "+minimo);
}

