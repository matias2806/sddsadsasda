/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo;
    var aumento10;
    
    sueldo = document.getElementById ("sueldo").value;
    
    sueldo =parseInt (sueldo);

    aumento10 = sueldo * 1.10 ;

    document.getElementById ("resultado").value = aumento10;
    
}
