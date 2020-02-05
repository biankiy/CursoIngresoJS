/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero  = document.getElementById('numeroUno').value;
	parseInt(primerNumero)
	segundoNumero = document.getElementById('numeroDos').value;
	parseInt(segundoNumero)
	resultado     = primerNumero*segundoNumero;

    console.log(resultado);

}

function restar()
{
	
}

function multiplicar()
{ 
	
}

function dividir()
{
	
}

