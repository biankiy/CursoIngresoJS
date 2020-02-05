/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var valorSueldo;
	var aumento;

    valorSueldo =parseInt(document.getElementById('sueldo').value);
 
    aumento =valorSueldo+( valorSueldo *10 / 100);

    console.log(aumento);

   
    }


