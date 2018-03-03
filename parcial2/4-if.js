//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
//solo if o swich
/*se ingresan 2 numeros si son iguales se concatenan, si el primero es mayor que el segundo se multiplican
si el segundo es el mas grande se restan, si la multiplicacion da un numero par ademas de mostrar el resultado se muestra
el mensaje es par
*/
function Mostrar()
{
	/*alert("Funciona 4-if");
	
	var num1;
	var num2;
	var resultadoMult;
	var resultadoRest;
	var resultadoMulPar;

	num1 = prompt ("Ingrese el numeo 1");
	num2 = prompt ("Ingrese el numeo 2");

	if (num1 == num2)
	{

	}

	if(num1 > num2)
	{
		resultadoMult = num1*num2;
		if(resultadoMult % 2 ==0)
		{
			resultadoMulPar = "Es par"+resultadoMult;
		}
	}
		if else(num2 > num1)
		{
		resultadoRest=num2 -num1;
		}


document.write("son iguales ==="+);
document.write("<br> El primero es mayor que el segundo"+resultadoMult);
document.write("<br> El primero es mayor que el segundo"+resultadoMultPar);
document.write("<br> El segundo es mas grande"+resultadoRest);*/



var num1;
var num2;
var resultado;

num1 = prompt("Ingrese el primer numero");
num2 = prompt ("Ingrese el segundo numero");

num1 = parseInt(num1);
num2 = parseInt(num2);

	if (num1 == num2)
	{
		resultado = num1 * num2;	
	}
	else if ( num1 > num2)
	{
		resultado = num1 - num2;	
	}
	else
	{
		resultado = num1 + num2;
	}

document.write("El resultado es " + resultado);
}

