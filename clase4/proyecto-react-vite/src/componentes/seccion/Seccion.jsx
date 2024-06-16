import './Seccion.css'
import hogwartsimage  from '../../assets/img/hogwarts.jpg'
import Boton from '../boton/Boton'


function Seccion() {
	const handleClicEnBoton = () =>{
		alert('Hiciste Clic en el botón')
	}
	return(
	<section className="seccion">
		<h2>Información sobre Hogwarts</h2>
		<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis magnam, nihil ullam dolore repudiandae maiores deserunt accusantium.</p>

		<img src={hogwartsimage} alt="Hogwarts" />

		<Boton color="gray" texto ="Leer más" onClick={handleClicEnBoton} />

		<Boton className="boton" texto ="Comprar" onClick={handleClicEnBoton} />

		</section>
	)
}

export default Seccion;