const form = document.querySelector("#calculadora"); // obtenemos el objeto con el identificador calculadora
const parrafo = document.createElement("p");
parrafo.style = "display:none";
document.body.appendChild(parrafo);

const boton = document.createElement("button");
boton.id = "mostrar"; // Asignamos un identificador al botón recién creado.
boton.style = "display:none";
boton.textContent = "Vuelve a calcular";
document.body.appendChild(boton);

const calcular = document.querySelector("#calcular");
const ejecutar = function() { // Dentro de una constante guardamos una función para crear una escucha de evento.
let resultado = calculaValores();
imprimirResultado(resultado);
}
const mostrar = function() { // lo mismo que la anterior.
mostrarFormulario();
}
calcular.addEventListener("click", ejecutar); // cuando el botón con el identificador calcular sea pulsado ejecutar la función guardada en la constante ejecutar.
boton.addEventListener("click", mostrar);

function calculaValores() { // Declaramos función.
	let valor = document.querySelector("#valor"); // En la variable valor, guardamos el objeto del input con identificador #valor.
	let operadores = valor.value.split(" "); // Combertimos los valores ingresados en el input con el atributo value, en un array que guardamos en operadores.
	let tipoOperacion = document.querySelector("#operacion");
	if (tipoOperacion.value=="suma") {
		let resultado = parseInt(operadores[0]); // guardamos el valor del primer índice del array en la variable resultado.
		operadores.shift(); // Eliminamos el primer índice del array.
		for (o of operadores) { // en la variable O, guardamos en cada iteración el valor de cada índice del array operadores.
			resultado += parseInt(o); // a la variable resultado le sumamos el valor de o, antes lo combertimos en número.
		}
		return(resultado); // la función devuelve el valor de resultado.
	} else if (tipoOperacion.value=="resta") {
		let resultado = parseInt(operadores[0]);
		operadores.shift();
		for (o of operadores) {
			resultado -= parseInt(o);
		}
		return(resultado);
} else if (tipoOperacion.value=="multiplicacion") {
	let resultado = parseInt(operadores[0]);
		operadores.shift();
		for (o of operadores) {
			resultado *= parseInt(o);
		}
		return(resultado);
} else {
	let resultado = parseInt(operadores[0]);
		operadores.shift();
		for (o of operadores) {
			resultado /= parseInt(o);
		}
		return(resultado);
}
}

function imprimirResultado(resultado) {
parrafo.textContent = "El resultado es: "+resultado;
parrafo.style = "display:contents";
boton.style = "display:contents";
form.style = "display:none;";
}

function mostrarFormulario() {
form.style = "display:contents";
let valor = document.querySelector("#valor");
valor.value = "";
parrafo.style = "display:none";
boton.style = "display:none";
}