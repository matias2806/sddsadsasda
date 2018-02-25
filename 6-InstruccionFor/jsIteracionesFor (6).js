function Mostrar()
{
    var tope = parseInt (prompt ("ingrese un numero positivo") );
    var cantidadPares=0;

    for(contador=1;contador <= tope ;contador++)
    {
    if(contador %2 == 0)
    {
        document.write("<br> "+ contador);
        cantidadPares++;
    }
        
    }
    
    document.write("<br> te mostre " +cantidadPares +" numeros pares" );



}//FIN DE LA FUNCIÓN