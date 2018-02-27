function Mostrar()
{
  /*var importe;
  
  importe = prompt ("Coloque el importe de su producto");

  importe = importe *1.21;

  document.getElementById("importeFinal").value = importe;*/

var precio;
var descuento;
var precioFinal;
precio = prompt ("Ingrese el precio de su producto");
descuento = prompt ("Ingrese el porcentaje de descuento que posee el producto(del 0 al 100)");

precioFinal = (precio * descuento)/100;
precioFinal =precio - descuento;
document.getElementById("importeFinal").value = precioFinal;


}
