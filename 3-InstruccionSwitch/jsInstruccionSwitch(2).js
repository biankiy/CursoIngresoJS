function mostrar()
{
//tomo la edad  
var mesDelAño;
mesDelAño = document.getElementById('mes').value;


	switch(mesDelAño)
	
	{	
		case "Diciembre":
		case "Enero":
		case "Febrero":
			console.info("Ya pasamos el frio, ahora calor!!!.");
			break;

		case "Marzo":
		case "Abril":
		case "Mayo":	
			console.info("Falta para el invierno.");
			break;

		case "Junio":
		case "Julio":
		case "Agosto":
			console.info("Abrigate que hace frio.");
			break;

	
	}




}//FIN DE LA FUNCIÓN