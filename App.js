const express = require ("express");

const app = express();

function mostrar(req, res) {
    res.send("Hola")
};

function saludo(req, res) {
    const user = req.params.user;
    if(isEmptyOrUndefined(user))
        res.send("Hola, mi amigo")
    else if(isUpperCase(user)) 
        res.send(`HOLA ${user}`)   
    else res.send(`Hola ${user}`)
};

app.get("/", mostrar);

app.get("/greet", saludo);

app.get("/greet/:user",saludo);

app.listen(4000);

const isEmptyOrUndefined = (user) => user == "" || user == undefined;

const isUpperCase = (user) => user.toUpperCase() == user;

