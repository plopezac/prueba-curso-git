const express = require('express');
const app = express();

app.get('/hola', (req, res) =>{
    res.send('ruta Hola');
});

app.get('/adios', (req,res)=>{
    res.send('ruta Adios');
});

app use(express.static(__dirname + '/Course'));
app listen(3000, ()=> {
    console.log('Example app listening on port 3000!');
});