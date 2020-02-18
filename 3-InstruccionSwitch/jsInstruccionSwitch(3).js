function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
{
	case "Febrero":
	  console.info("Este mes no tiene más de 29 días");
	  break;

	case "Enero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "junio":
	case "Julio":
	case "Agosto":
	case "Septiembre":
	case "octubre":
	case "Noviembre":
	case "Diciembre":
		console.info("Este mes tiene 30 o más días");
		break;
}

//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN