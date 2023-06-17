const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port = process.env.PORT;
app.set('view engine', 'hbs'); // para usar el handlebars para express
hbs.registerPartials(__dirname + '/views/partials'); //para usar parciales
//para servir contenido estatico
app.use(express.static('public')); //definicion de midelware express. si public esta en otro sitio especificar path


// app.get('/', (req, res)=> {
//     res.send('Hello World')
// })

app.get('/', (req, res)=> {
    res.render('home',{ // estos son los argumentos
        nombre: 'Armando David',
        titulo: 'Curso de Node'
    });
})

app.get('/hola-mundo', (req, res)=> {
    res.send('Hola Mundo en su respectiva ruta')
})

app.get('/elements', (req, res) => {
    // res.sendFile(__dirname + '/public/elements.html')
    res.render('elements', {
        nombre: 'Armando David',
        titulo: 'Curso de Node'
    })
});

app.get('/generic', (req, res) => {
    // res.sendFile(__dirname + '/public/generic.html')
    res.render('generic', {
        nombre: 'Armando David',
        titulo: 'Curso de Node'
    })
});

app.get('/salidas', (req, res) => {
    res.render('salidas', {
        nombre: 'Armando David Espinoza',
        titulo: 'Curso de Node'
    })

});

app.get('*', (req, res)=> {
    // res.send('404 | Page not found')
    res.sendFile(__dirname+'/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
})