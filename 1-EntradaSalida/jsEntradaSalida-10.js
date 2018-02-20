/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
    var desc25;
    
    importe = document.getElementById ("importe").value;
    
    importe =parseInt (importe);

    desc25 = importe * 0.75 ;

    document.getElementById ("resultado").value = desc25;
    
}
