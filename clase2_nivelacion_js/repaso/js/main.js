//Eventos - Manipulacion del DOM
/*
let miBoton = document.getElementById('boton')
console.log(miBoton);
miBoton.addEventListener('click', function() {
	alert ('Hiciste Click en el boton')
})
*/


//Delegacion
/*let contenedor = document.getElementById('contenedor')
contenedor.addEventListener('click', function(event) {
	if (event.target.tagName === 'BUTTON') {
		alert('Hiciste clic en un boton dentro del contenedor')
	}
})
*/


//Propagacion
/*let contenedor = document.getElementById('contenedor')
contenedor.addEventListener('click', function(event) {
	event.stopPropagation() //Detiene la propragacion del evento
	{
		alert('Evento detenido en el contenedor')
	}
})
	*/

//Modificacion del DOM
// let miElemento = document.getElementById('mi-elemento')
// miElemento.textContent = 'Nuevo Contenido'

//Eliminar contenido del DOM
// let elementoAEliminar = document.getElementById('elemento-a-eliminar')
// elementoAEliminar.remove()

//Agregar elemento hijo
let contenedor = document.getElementById('contenedor')
let nuevoElemento = document.createElement('p')
nuevoElemento.textContent = 'Este es un nuevo contenido con appendChild'

contenedor.appendChild(nuevoElemento)

