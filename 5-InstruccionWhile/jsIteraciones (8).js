function Mostrar()
{
	var positivo=0;
	var negativo=1;
	var respuesta=1;
	var numero;
	var acumulador=0;
	
	while(respuesta == 1 )
		{
		numero = parseInt (prompt ("ingresar numeros") );

		if (numero >= 0)
			{
			positivo = numero + positivo;
			}
		else
			{
			negativo=negativo * numero;
			}
		respuesta=confirm("¿Continuar?");
		}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN