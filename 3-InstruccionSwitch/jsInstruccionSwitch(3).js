function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
    switch(mesDelAño)
	{
        case "Febrero" :
        alert ("Este mes no tiene mas de 29 dias.");
        break;

        default :  //El default hace que no tengas que escribir todos los case(Ojo toma a todo lo otro)
        alert ("Este mes tiene 30 o mas dias");
        break;






    }
    


}//FIN DE LA FUNCIÓN