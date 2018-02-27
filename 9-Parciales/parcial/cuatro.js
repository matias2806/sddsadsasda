/*ingresar 3 numeros e informar cual es el mayor!*/
function Mostrar()
{
var numero1;
var numero2;
var numero3;
var maximo;
var minimo;
numero1 = parseInt (prompt("Ingrese el numero 1"));
numero2 = parseInt (prompt("Ingrese el numero 2"));
numero3 = parseInt (prompt("Ingrese el numero 3"));

if(numero1 > numero2 && numero1 > numero3 )
    {
    maximo = numero1;
    }
    else if(numero2 > numero3)
    {
    maximo = numero2;
    }
    else
    {
    maximo =numero3;
    }

if(numero1 < numero2 && numero1 < numero3 )
    {
    minimo = numero1;
    }
    else if(numero2 < numero3)
    {
    minimo = numero2;
    }
    else
    {
    minimo =numero3;
    }

document.write("El maximo es "+maximo);
document.write("<br>El minimo es "+ minimo);
}
