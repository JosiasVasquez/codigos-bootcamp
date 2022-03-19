const parrafo = document.createElement("p");
parrafo.style = "display:none";
document.body.appendChild(parrafo);

const boton = document.createElement("button");
boton.id = "mostrar";
boton.style = "display:none";
boton.textContent = "Vuelve a calcular";
document.body.appendChild(boton);

const calcular = document.querySelector("#calcular");
calcular.onclick = function() {
const resultado = calculaValores();
imprimirResultado(resultado);
}
const mostrar = function() {
mostrarFormulario();
}
boton.addEventListener("click", mostrar);

function calculaValores() {
	let valor = document.querySelector("#valor");
	let operadores = valor.value.split(" ");
	let tipoOperacion = document.querySelector("#operacion");
	if (tipoOperacion.value=="suma") {
		let resultado = parseInt(operadores[0]);
		operadores.shift();
		for (o of operadores) {
			resultado += parseInt(o);
		}
		return(resultado);
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
let form = document.querySelector("#calculadora");
form.style = "display:none;";
}

function mostrarFormulario() {
let form = document.querySelector("#calculadora");
form.style = "display:contents";
let valor = document.querySelector("#valor");
valor.value = "";
parrafo.style = "display:none";
boton.style = "display:none";
}