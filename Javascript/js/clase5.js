const boton = document.querySelector("#saludo"); // guardamos el botón con el identificador #saludo en una constante llamada boton.
boton.onclick = function() { // cuando el usuario haga click en el botón guardado en la variable boton ejecuta lo siguiente.
	alert("hola, con gusto te saludo")
}

const escuchar = document.querySelector("#escucha") // lo mismo que antes, guardamos el botón me escuchas en una variable llamada escuchar.
const oyente = function() { // en una variable llamada oyente guardamos una función.
	muestraAlerta();
	alert("Fuerte y claro");
}

escuchar.addEventListener("click",oyente); // creamos un escuchador de eventos, se aplica al botón guardado en la variable escuchar, el evento que está escuchando es click, y cuando ocurra ejecutará la función guardada en la variable oyente.

function muestraAlerta() { // declaramos función muestraAlerta.
alert("Sí, te escucho");
}