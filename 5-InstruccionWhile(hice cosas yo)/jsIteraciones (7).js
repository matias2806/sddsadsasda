function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
    var numero;

while(respuesta == "si" )
	{
	numero =parseInt (prompt ("ingresar numeros") );
	acumulador=acumulador + numero ;
	contador++;
	respuesta=prompt("¿Continuar?");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN