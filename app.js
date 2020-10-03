const express = require ('express');
const app = express();

const port = process.env.PORT || 3000;

//MOTOR DE PLANTILLAS
app.set('view engine','ejs');
app.set('views', __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render("index", {titulo : "mi titulo dinamico"})
})

app.get('/servicios', (req, res) => {
    res.render("servicios", {tituloServicios : "titulo de servicios"})
})

app.use((req, res, next) =>{
    res.status(404).render("404", 
    {titulo404: "404",
    descripcion404: "titulo del sistio web"
    })
})

app.listen(port, () => {
    console.log('server escuchando', port)
})