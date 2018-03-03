//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
/*5-Realizar el algoritmo que al presionar el botón "Mostrar" pida un mes del año por prompt, si es un "enero" o "febrero" 
informar por alert “Veranito!!!!” de lo contrario informar por alert “extraño enero y febrero!!!” .*/

	var mes;

	mes = prompt ("Ingrese un mes del año");


	switch(mes)
	{
		case "enero":
		case "febrero":
		alert("Veranitooo!!");
		break;


		default:
		alert("Extraño enero y febrero");
	}	

	
}

