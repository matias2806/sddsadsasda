function Mostrar()
{

	
	var maximo =0;
	var minimo=0;
	var numero;

	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		numero = prompt ("Ingrese un numero");

		if (numero > maximo)
			{
			maximo = numero;
			}
		if(numero< minimo)
			{
			minimo = numero;
			}	
		respuesta = prompt ("¿Quiere ingresar otro numero?");
	}

	document.getElementById ("maximo").value = maximo;
	document.getElementById ("minimo").value = minimo;


}//FIN DE LA FUNCIÓN