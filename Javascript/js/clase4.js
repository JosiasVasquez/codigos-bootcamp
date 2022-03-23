// funciones en javascript.

function muestraalerta() { // declaramos una función.
	alert("Hola, está es una función");
}

function sumar(operador1, operador2) { // declaramos una función con parámetros.
	let resultado = operador1+operador2;
	alert(resultado);
}

function restar(operador1, operador2) { // Declaramos una función con dos parámetros, y que devuelve un valor.
	let resultado = operador1-operador2
	return(resultado); // está función devuelve el valor de la variable resultado.
}

muestraalerta(); // Llamamos la función muestra alerta.

sumar(5,20); // llamamos la función sumar, y le pasamos dos números separados por coma como argumentos. Prueba a cambiar los números entre paréntesis.

let resultado = restar(35,20); // Llamamos una función dentro de una variable para capturar la respuesta que de la función.

alert(resultado); // Mostramos en una alerta el valor de la variable resultado.