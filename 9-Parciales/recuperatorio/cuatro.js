function Mostrar()
{
//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
//solo if o swich
/*se ingresan 2 numeros si son iguales se concatenan, si el primero es mayor que el segundo se multiplican
si el segundo es el mas grande se restan, si la multiplicacion da un numero par ademas de mostrar el resultado se muestra
el mensaje es par
*/
	
	var num1;
	var num2;
    var igual;
    var multiplicacion;
    var resta;
	

	num1 = prompt ("Ingrese el numeo 1");
	num2 = prompt ("Ingrese el numeo 2");

	if (num1 == num2)
	{
        igual=num1+num2;
	}
    else
        if(num1 > num2)
        {
            multiplicacion= num1*num2;
        }
        else(num2 > num1)
        {
            resta =num2 - num1;
        }


document.write("son iguales === "+igual);
document.write("<br>El primero es mayor que el segun y la multiplicacion da "+multiplicacion);
document.write("<br>El segundo es mas grande y la resta da "+resta);

}
