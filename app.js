const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, 'public')));

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register.html', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});