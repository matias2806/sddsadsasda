//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*5-Realizar el algoritmo que al presionar el botón "Mostrar" pida un mes del año por prompt, si es un "enero" o "febrero" informar por alert “Veranito!!!!” 
	de lo contrario informar por alert “extraño enero y febrero!!!” .*/

	var mes; 

	mes = prompt ("Ingrese un mes");

	switch(mes)
	{
		case "enero" :
		case "febrero":
		alert ("Veranitooo!!!");
		break;

		case "marzo":
		case "abril":
		case "mayo":
		case "junio":
		case "julio":
		case "agosto":
		case "septiembre":
		case "octubre":
		case "noviembre":
		case "diciembre":
		alert ("extraño enero y febrero!");
		break;

		default:
		alert ("Ingrese un mes valido - en minusculas-")
		break;
		
	}


	
}

