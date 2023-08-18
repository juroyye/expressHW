const express = require('express');
const app = express();

const port = 3005;


app.get('/', (req, res) => {
    res.send(' <h1> Home Page </h1>')
})


app.get('/bran', (req, res) => {
    res.send(' <h1> Brans Page </h1>')
})

app.get('/tia', (req, res) => {
    res.send(' <h1> Tias Page </h1>')
})

app.get('/omar', (req, res) => {
    res.send(' <h1> Omars Page </h1>')
})

app.get('/sharla', (req, res) => {
    res.send(' <h1> Sharlas Page </h1>')
})

app.get('/LJ', (req, res) => {
    res.send(' <h1> LJs Page </h1>')
})

app.get('/kai', (req, res) => {
    res.send(' <h1> Kais Page </h1>')
})

app.get('/taylor', (req, res) => {
    res.send(' <h1> Taylors Page </h1>')
})

app.get('/mariecia', (req, res) => {
    res.send(' <h1> Mariecias Page </h1>')
})

app.get('/keiara', (req, res) => {
    res.send(' <h1> Keiaras Page </h1>')
})

app.get('/liani', (req, res) => {
    res.send(' <h1> Lianis Page </h1>')
})









app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})