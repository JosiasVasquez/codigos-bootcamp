var vaso = "agua"; // inicializamos variable vaso con contenido agua.
var contador=1; // incializamos variable contador con valor 1.

// a continuación iniciamos un bucle while.
while (vaso != "vino") { // mantener mientras vaso sea diferente a vino.
alert("ronda número "+contador+" el vaso contiene "+vaso); // mostramos una alerta que nos da el número de iteración más el contenido de vaso.
contador = contador+2; // en cada iteración sumamos 2 a la variable contador.
if (contador == 5) { // si contador es igual a 5.
vaso = "café";
}
if (contador == 7) { // si contador es igual a 7.
vaso = "cerbeza";
}
if (contador == 9) { // si contador es igual a 9.
vaso = "té";
}
if (contador >= 11) { // si contador es igual o mayor que 11.
vaso = "vino"; // luego de pasar por esta condición se cierra el bucle, porque se cumple la condición.
}
}

// A continuación creamos un bucle for.
for (i = 0; i < 6; i++) { // valor inicial 0, mantener mientras i sea menor que 6, en cada iteración sumar 1 a i.
  alert("Valor de i:"+i); // en cada iteración mostrar una alerta con la cadena valor de I, + el contenido de la variable I.
}

// creamos arrays de una dimención.
let DesarrolloWeb = ["HTML5", "CSS", "Javascript", "git y github pages"];
let pais = ["México", "Guatemala", "Colombia", "Ecuador"]

// creamos arrays de dos dimenciones.
let Antonio = ["Antonio", "García", 28, pais[0], DesarrolloWeb[2]];
let Hernan = ["Hernán", "villegas", 35, pais[2], DesarrolloWeb[3]];
let Karen = ["Karen", "Morán", 32, pais[3], DesarrolloWeb[1]];

// creamos array de 3 dimensiones.
let alumnos = [Karen, Antonio, Hernan];

alert(alumnos[1][4]); // mostramos en una alerta del segundo valor de alumnos, es decir Antonio, el contenido de la quinta casilla es decir DesarrolloWeb.

// a continuación creamos un bucle for of.
for (i of Hernan) { // Vamos rebisando uno por uno los valores guardados en el array hernan, y lo guardamos en la variable i.
alert(i);
}