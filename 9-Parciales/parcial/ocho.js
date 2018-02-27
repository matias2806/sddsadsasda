/*
Ingreso de alumnos, no sabemos cuantos hay
vamos a pedir el nombres
quiero saber cuantos alumnos ingrese
document.write se ingresaron x alumnos" son 9

Consignas:
1 Cantidad 2 promedio total 3cant mujeres 4cant varones
5cant de varones desaprobados 6nombre de la mejor nota 
7promedio de las mujeres(nota) 8sexo del menor edad
9promedio de las edades de los aprobados (177/6)
10 cant de notas pares(4) 11 cant de notas impares(3)
*/
function Mostrar()
{
    var nombre;
    var contadorAlumnos=0;
    var respuesta = "si";
    var nota;
    var acumuladorNotas=0;
    var promedio;
    var sexo;
    var varones=0;
    var mujeres=0;
    var varonesDesaprobados=0;
    var notaMax;
    var maximo;
    var acumuladorNotasMujeres=0;
    var edad;
    var edadMin;
    var sexoMin;
    var acumuladorDeEdad=0;
    var contadorDeAprovados=0;
    var promedioAprovados;
    var cantidadNotasPares=0;
    var cantidadNotasImpares=0;

    while (respuesta != "no")
    {
        nombre = prompt ("ingrese su nombre");  
        nota = parseInt ( prompt ("ingrese la nota (de 0 a 10)") );
        
        while(nota < 0 || nota > 10)
        {
            nota = parseInt ( prompt ("ingrese la nota nuevamente") );
        } 
        acumuladorNotas = acumuladorNotas + nota;      
        contadorAlumnos++;
    
        sexo = prompt ("ingrese su sexo (m o f)");
        while(sexo != "m" && sexo != "f")
        {
            sexo = prompt ("ingrese su sexo nuevamente ");
        }    
        if(sexo == "m")
        {
        varones++;
        } 
        else
        if(sexo == "f")
        {
        mujeres++;
        acumuladorNotasMujeres= acumuladorNotasMujeres + nota;
        }
    
        if (sexo == "m" && nota < 4)
        {
        varonesDesaprobados++;
        }
       //nombre de la mejor nota
        if (contadorAlumnos == 1)
        {
        maximo = nota;
        notaMax = nombre;
        }
        if (maximo < nota)
        {
        notaMax = nombre;
        }
    
    //8 el sexo del menor edad
    edad =parseInt (prompt("Cuantos años tenes?") );

    while (edad<18 || edad>100)
        {
        edad = prompt("Reingrese la edad(entre 18 y 100)");
        }
        if (contadorAlumnos ==1)
            {
            sexoMin =sexo;
            edadMin = edad;
            }
            if(edadMin > edad)
            {
            sexoMin = sexo;
            }
     respuesta = prompt ("no para salir");

    //Promedio de las edades de los aprovados!
            if(nota >= 4)
            {
            acumuladorDeEdad = edad + acumuladorDeEdad;
            contadorDeAprovados++;
            }
    //cantidad de notas pares e impares
            if(nota % 2 == 0)
            {
            cantidadNotasPares++;
            }
            else{
            cantidadNotasImpares++;
            }
            

    }
    promedio = acumuladorNotas / contadorAlumnos;
    acumuladorNotasMujeres= acumuladorNotasMujeres / mujeres;
    promedioAprovados= acumuladorDeEdad/contadorDeAprovados;


    document.write ("Cantidad de alumnos "+ contadorAlumnos);
    document.write ("<br> Promedio de notas "+ promedio);
    document.write ("<br> Cantidad de Varones "+ varones);
    document.write ("<br> Cantidad de Mujeres "+ mujeres);
    document.write ("<br> Cantidad de Varones desaprovados "+ varonesDesaprobados);
    document.write ("<br> Nombre de la nota maxima  " +notaMax);
    document.write ("<br> Promedio notas de mujeres  " +acumuladorNotasMujeres);
    document.write ("<br> Sexo del de menor edad  " +sexoMin);
    document.write ("<br> El promedio de la edad de los aprovados " +promedioAprovados);
    document.write ("<br> La cantidad de notas pares son : " +cantidadNotasPares);
    document.write ("<br> La cantidad de notas impares son : " +cantidadNotasImpares);
}


