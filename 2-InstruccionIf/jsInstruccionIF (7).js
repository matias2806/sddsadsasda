function Mostrar()
{
//tomo la edad  
var edad;
var estadoc;

edad = document.getElementById("edad").value;
estadoc = document.getElementById("estadoCivil").value;

if (edad <=18 && estadoc != "Soltero")
{
    alert ("Es muy pequeño para NO ser soltero");
}
}//FIN DE LA FUNCIÓN