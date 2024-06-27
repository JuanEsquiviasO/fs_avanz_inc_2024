import { useState, useEffect } from "react";
import './Pociones.css'
import ListaDePociones from "./ListaDePociones";
import FormularioDePociones from "./FormularioDePociones"

const GestionPociones = () => {
	//Estado para almacenar Pociones
	const [pociones, setPociones] = useState([])

	//// Carga inicial de Pociones en Local Storage
	useEffect(() => {
		const pocionesGuardadas = JSON.parse(localStorage.getItem('pociones'))
			// console.log('Pociones cargadas: ', pocionesGuardadas)
			if(pocionesGuardadas) {
				setPociones(pocionesGuardadas)
			}
	}, [])

	//Almacena las pociones de LocalStorage cuando cambia el estado
	useEffect(() => {
		localStorage.setItem('pociones', JSON.stringify(pociones))
	}, [pociones]);


	//Marcar una poción como completado o no compleado
	const completarPocion = (id) => {
		const nuevasPociones = pociones.map ((pocion) =>
			pocion.id === id ? { ...pocion, completada: !pocion.completada } : pocion
		)
		setPociones(nuevasPociones)
	}

	//Eliminar una poción
	const eliminarPocion = (id) => {
		const nuevasPociones = pociones.filter((pocion) => pocion.id !== id)
		setPociones(nuevasPociones)
	}

	//Función para agregar una nueva pocion a la lista************
	const agregarPocion = (nombre) => {
		const nuevaPocion = {
			id: Date.now(), //Generar ID único
			nombre,
			completada: false
		}
		//Actualiza el estado de pociones agregando la nueva pocion
		setPociones([...pociones, nuevaPocion])
	}


	return(
		<div className="contenedor-pociones">
			<h1 className="titulo">Gestión de pociones en Hogwarts</h1>
			{/* Componente ListaDePociones que muestra todas las pociones */}
			<ListaDePociones
			pociones = {pociones}
			completarPocion = {completarPocion}
			eliminarPocion = {eliminarPocion}
			/>
			{/* Componente FormularioDePociones que muestra todas las pociones */}
			<FormularioDePociones agregarPocion = {agregarPocion} />

		</div>
	)
}

export default GestionPociones