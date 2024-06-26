const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors')
require('dotenv').config();

// crear el servidor de express
const app = express();

// base de datos
dbConnection();

// cors
app.use(cors());

// directorio publico
app.use( express.static('public') );

// Lectura y parseo del body
app.use ( express.json() )

// Rutas 
app.use('/api/events', require('./routes/events'))
app.use('/api/auth', require('./routes/auth'));

app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

// Escuchar servidor

app.listen( process.env.PORT , () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
})