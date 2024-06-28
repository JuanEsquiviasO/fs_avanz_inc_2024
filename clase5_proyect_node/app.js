const express = require('express')
const app = express()
const port = 3000

const path = require('path')

//middleware para ervir contenidos estaticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'hbs')
app.set('views', (path.join(__dirname, 'views')))

app.get('/',  (req, res) => {
  res.render('index', {
		title: 'Inicio',
		message: 'Bienvenidos a nuestra app Express con Handlebars'
	})
})

app.get('/about us',  (req, res) => {
  res.send('About Us')
})

app.get('/contacto',  (req, res) => {
  res.send('Contacto')
})

app.get('/usuarios',  (req, res) => {
	const usuarios = [
		{nombre: 'Roy Fokker', email: 'rfokker@sdf1.com'},
		{nombre: 'Max Sterling', email: 'msterling@sdf1.com'}
	]
  res.render('Usuarios', { usuarios })
})

app.get('/enviar-formularios',  (req, res) => {
  res.send('Formulario enviado')
})

app.post('/actualizar-datos',  (req, res) => {
  res.send('Datos Actualizados')
})

app.put('/actualizar-datos',  (req, res) => {
  res.send('Datos Actualizados')
})

app.delete('/eliminar-datos',  (req, res) => {
  res.send('Datos Eliminados')
})



app.listen(port, () => {
	console.log(`Server running in http://localhost:${port}`)
})
