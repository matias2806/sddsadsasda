/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad;
    var sexo;
    var estadoCivil;
    var sueldoBruto;
    var legajo;
    var nacionalidad;

    edad = prompt ("Ingrese su edad");
    while (isNaN(edad)||edad < 18 || edad > 90)
        {
        edad = prompt ("Ingrese una edad correcta (Entre 18 a 90)"); //parsear
        edad = parseInt(edad);
        }

    sexo = prompt ("Ingrese su sexo");
    while(sexo != "M" && sexo != "F" )
    {
        sexo = prompt("Ingrese nuevamente su sexo ( M o F) ");
    }
    
    estadoCivil =prompt ("Cual es su estado civil? 1-Soltero 2-Casado 3-Divorciado 4-Viudo");
    while(estadoCivil != 1 && estadoCivil !=2 && estadoCivil !=3 && estadoCivil !=4)
    {
        estadoCivil = prompt ("Ingrese su estado civil nuevamente 1-Soltero 2-Casado 3-Divorciado 4-Viudo");
    }
    
    sueldoBruto = prompt ("Ingrese su sueldo Bruto");
    while (isNaN (sueldoBruto) || sueldoBruto<8000)
    {
        sueldoBruto = prompt ("Ingrese nuevamente su sueldo bruto");
    }

    legajo = prompt ("Ingrese su numero de legajo");
    legajo = parseInt (legajo)
    while (isNaN(legajo)|| legajo < 1000 || legajo > 9999  )
    {
       legajo = prompt ("Ingrese su numero de legajo (mayor 999)"); 
    }

    nacionalidad = prompt ("Ingrese su nacionalidad A-Argentino E-Extranjero y N-Nacionalizados");
    while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
    {
        nacionalidad =prompt ("Ingrese una nacionalidad VALIDA A-Argentino E-Extranjero y N-Nacionalizados")
    }

        switch(estadoCivil)
        {
            case "1" :
            estadoCivil = "soltero";
            break;
            case "2" :
            estadoCivil = "casado";
            break;
            case "3" :
            estadoCivil = "divorciado";
            break;
            case "4" :
            estadoCivil = "viudo";
            break;
        }


document.getElementById ("Edad").value = edad
document.getElementById ("Sexo").value = sexo
document.getElementById ("EstadoCivil").value = estadoCivil
document.getElementById ("Sueldo").value = sueldoBruto
document.getElementById ("Legajo").value = legajo
document.getElementById ("Nacionalidad").value = nacionalidad

}
