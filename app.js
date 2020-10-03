const express = require ('express');
const app = express();

require('dotenv').config()

const port = process.env.PORT || 3000;

//CONEXION A MONGODB
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.hq22f.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true}
)

    .then(() => console.log('BASE DE DATOS CONECTADA'))
    .catch(e => console.log(e))

//MOTOR DE PLANTILLAS
app.set('view engine','ejs');
app.set('views', __dirname + "/views");

app.use(express.static(__dirname + "/public"));

//RUTAS DE LA APP
app.use('/', require('./router/Rutasweb'))
app.use('/mascotas', require('./router/mascotas'))

app.use((req, res, next) =>{
    res.status(404).render("404", 
    {titulo404: "404",
    descripcion404: "titulo del sistio web"
    })
})

app.listen(port, () => {
    console.log('server escuchando', port)
})