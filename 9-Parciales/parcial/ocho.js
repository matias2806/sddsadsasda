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

    while (respuesta != "no")
    {
        nombre = prompt ("ingrese su nombre");  
        nota = parseInt ( prompt ("ingrese la nota") );
        
        while(nota < 0 || nota > 10)
        {
            nota = parseInt ( prompt ("ingrese la nota") );
        } 
        acumuladorNotas = acumuladorNotas + nota;      
        contadorAlumnos++;
    
        sexo = prompt ("ingrese su sexo");
        while(sexo != "m" && sexo != "f")
        {
            sexo = prompt ("ingrese su sexo");
        }    
        if(sexo == "m")
        {
        varones++;
        } 
        else
        if(sexo == "f")
        {
        mujeres++;
        }
    
        if (sexo == "m" && nota < 4)
        {
        varonesDesaprobados++;
        }
       
        if (contadorAlumnos = 1)
        {
        maximo = nota;
        notaMax = nombre;
        }
        else
        {
        maximo > nota;
        notaMax = nombre;
        }
    
     respuesta = prompt ("no para salir");
    }
    
    document.write ("Cantidad de alumnos "+ contadorAlumnos);
    document.write ("<br> Promedio de notas "+ promedio);
    document.write ("<br> Cantidad de Varones "+ varones);
    document.write ("<br> Cantidad de Mujeres "+ mujeres);
    document.write ("<br> Cantidad de Varones desaprovados "+ varonesDesaprobados);
    document.write ("<br> Nombre de la nota maxima  " +notaMax);
    document.write ("<br> Promedio notas de mujeres  " +acumuladorNotasMujeres);

}


