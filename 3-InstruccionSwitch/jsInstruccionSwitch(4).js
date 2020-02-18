function mostrar()
{
//tomo la edad  
var mesDelAño
mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
{
	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "octubre":
	case "Diciembre":
	console.info("Tiene 31 dias");
	break;

	case "Febrero":
	console.info("Tiene 29 dias");
	break;

	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
	console.info("Tiene 30 dias");
	break;







}
	

//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN