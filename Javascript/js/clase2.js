// Este es un comentario de una línea en javascript

/* Este es un comentario
	de varias líneas
	en javascript,
	se puede utilizar para explicar algo a detalle. */

	// declaramos dos variables que utilizaremos en los siguientes ejemplos, modificando el valor de estas variables haremos cambios en todos los ejemplos.
var vaso = "café"; // creamos variable vaso de tipo global con contenido café.
var cantidad = 8; // creamos variable global cantidad de tipo númerica.

// A continuación creamos un condicional simple solo con if
if (vaso!="agua") { // si el contenido de la variable vaso es diferente a agua
	alert("deberías beber más agua"+". Condición simple"); // mostramos alerta
} // Cerramos condición.

// ahora creamos una condición compuesta con if y else
if (cantidad>=8) { // Si cantidad es mayor o igual a 8.
	alert("estás bebiendo "+cantidad+" vasos"+". Condición compuesta");
} else { // Si no.
	alert("deberías beber más líquidos"+". Condición compuesta");
}

// la misma condición if else, con mayor complegidad.
if (cantidad>=8 && vaso=="agua") { // Si cantidad es mayor o igual a 8 y vaso es igual a agua. Nota que utilicé el operador lógico && para expresar la conjunción Y.
	alert("Que bueno que cuidas tu salud"+". Condición compleja");
} else if (cantidad>=8 && vaso!="agua") { // Si cantidad es mayor o igual a 8 y vaso es diferente a agua. Nota que utilizo el operador != para expresar la diferencia.
	alert("Es bueno beber líquidos para mantenerse hidratado"+". Condición compleja");
} else if(cantidad<8 ?? vaso!="agua") { // Si cantidad es menor a 8 o vaso es diferente que agua, nota que utilizo el signo ? doble para expresar la conjunción O.
	alert("deberías de cuidar tu salud"+". Condición compleja");
} else { // Si no es ninguna de las anteriores.
	alert("No sé como ayudarte"+". Condición compleja");
}

// usamos el operador ternario para modificar el contenido de la variable vaso dependiendo del contenido de la variable cantidad.
vaso = cantidad<5 ? "vino" : "agua"; // El contenido de vaso será si cantidad es menor que 5, vino. si no, agua.
// Con el operador ternario mostramos una alerta dependiendo del contenido de la variable vaso.
vaso == "vino" ? alert("salud"+". Condición con el operador ternario") : alert("bebe algo"+". Condición con el operador ternario");

// Con switch evaluamos el contenido de la variable vaso, en cada caso mostramos una alerta distinta según el contenido.
switch (vaso) { // activar si el contenido de vaso.
	case "agua": // es agua
		alert("la salud es importante"+". Switch");
		break; // salir.
 case "café": // es café.
		alert("rico para el frío"+". Switch");
		break;
	case "vino": // es vino
		alert("salud"+". Switch");
		break;
	default: // para cualquier otro caso.
		alert("bebe algo"+". Switch");
		break
}

// a continuación creamos un array llamado cartera.
var cartera = ["licencia", "fotografía", "targeta de salud"]
// ahora mostramos una alerta con el contenido de la segunda casilla de el array cartera.
alert("El contenido es:"+cartera[1]);
// Recuerda que en programación se empiesa a contar desde 0.