/** Nivelacion JS*/
/*
console.log('Hi World');

//Variables
var nombre = 'Cosme'
let apellido = 'Fulanito'
let edad = 25
const PI = 3.14

var nombre = 'Harry'

console.log(nombre, apellido, edad, PI);

//Funciones
function saludar(nombre, apellido, edad){
	document.write("Hola ", nombre, apellido, edad);
}

saludar("Cosme ", "Fulanito ", 34);
*/

/**
function sumar(numeroA, numeroB) {
	return numeroA + numeroB
}

let resultado = sumar(3, 9)
console.log(resultado);
*/


//Condicionales
/*
function esMayorEdad(edad) {
	if (edad >= 18) {
		return 'Es mayor de edad'
	} else{
		return 'Es menor de edad'
	}
}

let resultado = esMayorEdad(25)
console.log(resultado);
*/

//Condicionales else if
/*function esMayorEdad(edad) {
	if (edad >= 18) {
		return 'Es mayor de edad'
	} else if(edad >= 13) {
		return 'Es adolescente'
	}
	else{
		return 'Es menor de edad'
	}
}

let resultado = esMayorEdad(33)
console.log(resultado);
*/

// Switch
/*let categoria = 'mexicana'
let tipoComida

switch (categoria) {
	case 'mexicana':
		tipoComida = 'Tacos'
		break;
	case 'china':
		tipoComida = 'Arroz frito'
		break;
	case 'francesa':
		tipoComida = 'Croissant'
		break;
	default:
		tipoComida = 'No especificada'
		break;
}

console.log('El plato típico de comida',categoria, 'es',tipoComida);
console.log('Categoría:',categoria, 'Plato:',tipoComida);
*/


/*
//While
let contador = 0

while (contador < 5) {
	console.log('El contador es: ' + contador);
	contador++
}
console.log('completado');
*/

//Usemos for para iterar cada personaje
let personajes = [
	{ nombre: 'Harry Potter', casa: 'Gryffindor', edad: 17 },
	{ nombre: 'Hermione Granger', casa: 'Grryffindor', edad: 18 },
	{ nombre: 'Ron Weasley', casa: 'Gryffindor', edad: 17 },
	{ nombre: 'Draco Malfoy', casa: 'Slytherin', edad: 17 },
	{ nombre: 'Luna Lovegood', casa: 'Ravenclaw', edad: 16 }
]

// Usemos for para iterar cada personaje
for (let i = 0; i < personajes.length; i++) {
	let personaje = personajes[i];
	console.log(` Nombre: ${personaje.nombre}, Casa: ${personaje.casa}, Edad: ${personaje.edad} `);
}