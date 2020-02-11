function mostrar()

//tomo la edad  
  {
  	var laEdad

	laEdad= document.getElementById('edad').value;
    laEdad= parseInt(laEdad);
     if(laEdad>17)
     {
     	alert("adulto");
     }
     else
     	if(laEdad<13)
     	{
     		alert("niño");
     	}
     	else
     	{
     		alert("adolescente");
     	}


  }


//FIN DE LA FUNCIÓN