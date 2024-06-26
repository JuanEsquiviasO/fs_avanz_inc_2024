import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './componentes/header/Header'
import Footer from './componentes/footer/Footer'
import Seccion from './componentes/seccion/Seccion'
import Menu from './componentes/menu/Menu'
import ListaCasas from './componentes/casas/ListaCasas'
import FormularioDePociones from './componentes/pociones/FormularioDePociones'
import GestionPociones from './componentes/pociones/GestionPociones'
import ListaPersonajes from './componentes/personajes/ListaPersonajes'
import DetallePersonaje from './componentes/personajes/DetallePersonaje'

function App() {
  return (
		<Router>
		<div className = 'container'>
			<Header/>
			<Menu/>
			<main>
				<Routes>
					<Route path = "/" element={ <Seccion /> }></Route>
					<Route path = "/pociones" element={ <GestionPociones /> }></Route>
					{/* <Route path = "/pociones" element={ <FormularioDePociones /> }></Route> */}
					<Route path = "/casas" element={ <ListaCasas /> }></Route>
					<Route path = "/personajes" element={ <ListaPersonajes /> }></Route>
					<Route path = "/DetallePersonaje/:id" element={ <DetallePersonaje /> }></Route>
				</Routes>
			</main>
			<Footer/>
		</div>
		</Router>
  )
}

export default App