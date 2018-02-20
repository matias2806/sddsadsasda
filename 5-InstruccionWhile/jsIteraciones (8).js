function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numero;
	var acumulador=0;

	while(respuesta == "si" )
		{
		numero =parseInt (prompt ("ingresar numeros") );
		acumulador=acumulador + numero ;
		contador++;
		respuesta=prompt("¿Continuar?");

		if (numero > 0)
		{
			positivo = numero + contador

		}
		}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN