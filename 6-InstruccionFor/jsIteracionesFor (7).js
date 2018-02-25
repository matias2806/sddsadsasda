function Mostrar()
{
    var tope = parseInt (prompt ("ingrese un numero positivo") );
    var cantidadDiv=0;

    for(contador=1;contador <= tope ;contador++)
    {
    if(tope % contador == 0)
    {
        document.write("<br> "+ contador);
        cantidadDiv++;
    }
        
    }
    
    document.write("<br> tiene " +cantidadDiv +" divisores" );




}//FIN DE LA FUNCIÓN