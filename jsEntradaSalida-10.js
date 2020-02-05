/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var valorSueldo;
	var descuento;

	valorSueldo= parseInt(document.getElementById('importe').value);

	descuento= valorSueldo-(valorSueldo*25/100);

	console.log(descuento);


	
}
