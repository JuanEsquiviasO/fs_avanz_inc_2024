const Pocion = ({ pocion, completarPocion, eliminarPocion }) => {
	//Destructuracion de props 'pocion'
	const { id, nombre, completada } = pocion

	const completar = () => {
		completarPocion(id)
	}

	const eliminar = () => {
		eliminarPocion(id)
	}

	return  (
		<div className="pocion">
			
			<span className={completada ? 'completada' : ''}>{nombre}</span>
			<button onClick={completar}>
				{completada ? 'Pendiente' : 'Completar'}
			</button>
			<button onClick={eliminar}>Eliminar</button>
		</div>
	)
}

export default Pocion