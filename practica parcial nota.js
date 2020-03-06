7- realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) y el sexo
(validar el sexo “f” o “m”) de 100 alumnos, informar por alert:
a el promedio de las notas totales.
b la nota más baja.
c la cantidad de varones que su nota haya sido mayor o igual a 6.
function sumar()

{
   var nota;
   var sexo;
   var contadorAlumno;
   var promedio;
   var sumatoriaDeNotas;
   var notaMasBaja;
   var cantidadVarones;

   contadorAlumno=0
   sumatoriaDeNotas=0
  

	 while(contadorAlumno>100)
	 { 
		nota=prompt("ingrese nota");
		nota=parseInt(nota); 
	 	 while(isNaN(nota)|| nota<0 || nota>10)
		   {
		   	 nota=prompt("ingrese nota");
		   	 nota=parseInt(nota);
		   }
   	
	   	sexo=prompt("ingrese sexo");
	   	while(!isNaN(sexo)|| sexo!="f" && sexo!="m" )
	  	 {
	   		sexo=prompt("ingrese sexo");
	   	 }	   	 

	   	 if(contadorAlumno==1)
	   	 {
	   	 	notaMasBaja=nota
	   	 }
	   	 	else
	   	 	{
	   	 		if(nota<notaMasBaja)
	   	 		{
	   	 			notaMasBaja=nota
	   	 		}
	   	 	}
	   	 if(sexo=="m" && nota>6 )
	   	 {
	   	 	cantidadVarones=cantidadVarones+1
	   	 }	
	   		  
	   		contadorAlumno=contadorAlumno+1
	   		sumatoriaDeNotas=sumatoriaDeNotas+nota
	   	 	promedio=sumatoriaDeNotas/contadorAlumno

	 } 

}
	

