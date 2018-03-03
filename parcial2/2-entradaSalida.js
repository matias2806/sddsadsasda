//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var importeFinal;

	importe = prompt ("Ingrese el importe de su producto");
	importe = parseFloat (importe);
	
	//importe final = importe +21% ----> importe *1.21

	importeFinal= importe *1.21; //si yo tengo un precio con iva y se lo quiero sacar * 0.79 

	document.getElementById('importe').value = importeFinal;
	
}

