const formulario = document.querySelector("#formulario"); // Creamos variable constante llamada formulario, en su interior guardamos el objeto del formulario con el identificador formulario.
const calcular = document.querySelector("#calcular");
const parrafo = document.createElement("p"); // Creamos un párrafo en memoria, aún no es parte del DOM
parrafo.style = "display:none"; // Ocultamos el contenido de el párrafo recién creado.
document.body.appendChild(parrafo); // Insertamos el párrafo en el body del DOM.
const boton = document.createElement("button");
boton.style = "display:none";
boton.textContent = "Calcular otra vez"; // Agregamos el texto que se muestra en el botón.
document.body.appendChild(boton);

calcular.onclick = function() { // Creamos un evento para el botón calcular.
	let resultado = calcularResultado(); // Llamamos una función dentro de una variable para capturar su respuesta.
	imprimirResultado(resultado); // Llamamos otra función, le pasamos como argumento la respuesta de la función anterior.
}

boton.onclick = function() {
	reiniciar();
}

function calcularResultado() { // Declaramos la función que calcula el resultado.
	let valor1 = document.querySelector("#valor1"); // obtenemos el objeto con el identificador valor1 de HTML, lo guardamos en una variable del mismo nombre.
	let valor2 = document.querySelector("#valor2");
	let operador1 = parseInt(valor1.value); // Declaramos variable llamada operador1, le damos como valor lo que ingresó el usuario en el input y lo combertimos a número.
	let operador2 = parseInt(valor2.value);
	let operacion = document.querySelector("#operacion");
	let resultado;
	switch (operacion.value) { // Cambiar según el valor de operacion.value
		case "suma": // Si es suma.
			resultado = operador1+operador2; // suma los valores y guarda el resultado en la variable resultado.
			return(resultado); // Retorna la variable resultado.
			break; // Sale del bucle.
		case "resta":
			resultado = operador1-operador2;
			return(resultado);
			break;
		case "multiplicacion":
			resultado = operador1*operador2;
			return(resultado);
			break;
			case "division":
				resultado = operador1/operador2;
				return(resultado);
				break
	}
}

function imprimirResultado(resultado) {
	parrafo.innerHTML = "el resultado es: <strong>"+resultado+"</strong>"; // Guarda un texto con código HTML dentro de la etiqueta de párrafo que creamos al inicio del script.
	parrafo.style = "display:contents";
	boton.style = "display:contents";
	formulario.style = "display:none";
}

function reiniciar() {
	let valor1= document.querySelector("#valor1");
	let valor2 = document.querySelector("#valor2");
	valor1.value = ""; // Vaciamos el contenido del input.
	valor2.value = "";
	formulario.style = "display:contents";
	parrafo.style = "display:none";
	boton.style = "display:none";
}