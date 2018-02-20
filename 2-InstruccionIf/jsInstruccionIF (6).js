function Mostrar()
{
//tomo la edad  

var edad;

edad = document.getElementById("edad").value;

if (edad >= 18)
{
    alert ("Sos mayor de edad.");
}
else if (edad >= 13 && edad <= 17)
{
    alert ("Sos Adolesente.");
}
else 
{
    alert("Sos un niño.");
}



}//FIN DE LA FUNCIÓN