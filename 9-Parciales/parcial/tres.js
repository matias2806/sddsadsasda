function Mostrar()
{
var largo;
var ancho;
var metrosCuadrados;

largo = document.getElementById("alrgo").value;
ancho = document.getElementById("ancho").value;
metrosCuadrados = 3*(ancho * largo);

alert("Se necesitan "+ metrosCuadrados + " metros de alambre para darle 3 vueltas de hilo de alambrado al terreno ");
 

}
