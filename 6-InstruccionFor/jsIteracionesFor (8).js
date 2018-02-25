function Mostrar()
{

    var tope = parseInt (prompt ("ingrese un numero positivo") );
    var bandera = "verdadero";

    for(contador=1;contador <= tope ;contador++)
    {
    if(tope % contador== 0)
        {
        //    document.write("<br> este contador es divisor " +contador);
            if (contador != 1 && contador != tope ) {
         //       document.write(" cago ");
                bandera="falso";
                break;
            }

 /*           if (contador == 1 ) {
                document.write(" OK ");
            }             
            else if (contador == tope ) {
                document.write(" OK ");
            }             
            else  {
                document.write(" cago ");
                bandera="falso";
                break;
            }     */        
            
 
        }         
     
    }
    
    if (bandera == "verdadero") { 
    document.write("<br> es primo "  );
    }
    else{
    document.write("<br>no es primo");
    }
}//FIN DE LA FUNCIÓN