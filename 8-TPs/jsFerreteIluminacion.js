/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparas;
    var precio;
    var marca;
    var total;
    var iibb;
    precio = 35;
    cantidadLamparas = document.getElementById ("Cantidad").value;
    marca = document.getElementById ("Marca").value;

        if (cantidadLamparas > 5)
            {
            total = cantidadLamparas * precio *0.5;
            document.getElementById("precioDescuento").value = total;
            }
        
      
        if (cantidadLamparas == 5 )
            {
                if (marca == "ArgentinaLuz")
                {
                total = cantidadLamparas * precio * 0.60 ;//40% de descuento
                document.getElementById("precioDescuento").value = total;
                }
                else
                {
                total = cantidadLamparas * precio * 0.70 ;//30% de descuento
                document.getElementById("precioDescuento").value = total; 
                }
            }

        if (cantidadLamparas == 4)
            {
                if (marca == "ArgentinaLuz" || marca =="FelipeLamparas")
                {
                total = cantidadLamparas * precio * 0.75 ;//25% de descuento
                document.getElementById("precioDescuento").value = total;
                }
                else
                {
                total = cantidadLamparas * precio * 0.80 ;//20% de descuento
                document.getElementById("precioDescuento").value = total; 
                }
            }
           
            if (cantidadLamparas == 3)
            {
                if (marca =="ArgentinaLuz")
                {
                total = cantidadLamparas * precio * 0.85 ;//15% de descuento
                document.getElementById("precioDescuento").value = total;
                }
                else if (marca == "FelipeLamparas")
                {
                total = cantidadLamparas * precio * 0.90 ;//10% de descuento
                document.getElementById("precioDescuento").value = total; 
                }
                else
                {
                total = cantidadLamparas * precio * 0.95 ;//5% de descuento
                document.getElementById("precioDescuento").value = total;
                }
            }
            if (cantidadLamparas== 1 || cantidadLamparas ==2 )
            {
            total = cantidadLamparas * precio ; //(Sin desc)
            document.getElementById("precioDescuento").value = total;
            }

            if (total > 120)
                {
                iibb = total * 0.1;
                alert ("Usted va a pagar "+iibb +" de ingresos brutos");
                }

    






}
