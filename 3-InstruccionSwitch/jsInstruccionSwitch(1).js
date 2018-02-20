function Mostrar()
{
    //tomo la edad  
    var mesDelAño = document.getElementById('mes').value;
    switch(mesDelAño)
    {
        case "Enero" :
            alert ("Devuelta a clases");
            break; //finaliza el case!
        case "Marzo" :
            alert ("A clases");
            break;
        case "Julio" :
            alert ("Se vienen las vacaciones!!!");
            break;
        case "Diciembre" :
            alert ("Se vienen las fiestas");
            break;     
    }



}//FIN DE LA FUNCIÓN