function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño)
    {
      case "Febrero" :
      alert ("Tiene 28 Dias.");
      break;

      case "Abril":
      case "Junio":
      case "Septiembre":
      case "Noviembre":
      alert ("Tiene 30 Dias.");
      break;

      default:
      alert ("Tiene 31 Dias.");
    }


}//FIN DE LA FUNCIÓN