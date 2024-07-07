const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const hbs = require('hbs');

//Importar Rutas
const uploadRouter = require('./routes/uploadRoutes');

//Cargar variable de entorno
dotenv.config();
const axios = require('axios');
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
// Registrar parciales
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));


//Configuración de Rutas
// app.use('/upload-form', uploadRouter);
app.use('/upload', uploadRouter);


//Rutas Principales
//Ruta principal
app.get('/', (req, res) => {
  res.render('index', {
    layout: 'layouts/main',
    title: 'Inicio',
    message: 'Bienvenidos a nuestra aplicación express con Handlebars'
  });
});

/**
//Ruta para mostrar el formulario de carga de archivos
app.get('/upload-form', (req, res) => {
  res.render('upload-form', {
    layout: 'layouts/main',
    title: 'Carga de Archivos',
    message: 'Formulario de carga de archivos.'
  })
})

//Ruta para manejar la carga del archivo(POST)
app.post('/upload', upload.single('file'), (req, res) => {
  res.render('upload-success', {
    title: 'Carga Exitosa',
    message: 'Archivo cargado exitosamente.',
    filename: req.file.filename,
  });
})
*/

app.get('/acerca', (req, res) => {
  res.render('acerca', {
    layout: 'layouts/main',
    title: 'Acerca de nosotros',
    message: 'Información acerca de nuestra aplicación.',
  });
});

app.get('/contacto', (req, res) => {
  res.render('contacto', {
    layout: 'layouts/main',
    title: 'Contacto',
    message: 'Página de contacto'
  });
});

app.get('/usuarios', (req, res) => {
  const usuarios = [
    { nombre: 'Roy Fokker', email: 'rfokker@sdf1.com' },
    { nombre: 'Rick Hunter', email: 'rhunter@sdf1.com' }
  ];
  res.render('usuarios', { usuarios });
});

//Ruta para mostras todos los personajes
app.get("/personajes", async(req, res) => {
  try {
    const response = await axios.get('https://hp-api.herokuapp.com/api/characters');
    const characters = response.data;
    res.render('personajes', { characters });
  } catch(error){
    console.error('Error al obtener personajes populares', error);
    res.status(500).send('Error al obtener personajes');
  }
})

//Ruta para mostras personajes filtrados por casa
app.get('/personajes/casa/:house', async(req, res) => {
  const house = req.params.house; 
  try {
    const response = await axios.get(`https://hp-api.herokuapp.com/api/characters/house/${house}`);
    const characters = response.data;
    res.render('personajes-casa', { characters, house });
  } catch(error){
    console.error('Error al obtener personajes populares', error);
    res.status(500).send('Error al obtener personajes');
  }
})

// Manejo de errores 404
app.use((req, res, next) => {
  res.status(404).render('error404', { title: 'Página no encontrada' });
});

// Iniciar servidor

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});