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








app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})