const express = require("express");
const app = express();

app.get('/user-ip', (req,res) => {
    const userIP = req.ip;
    res.send('Seu IP é: ' + userIP);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000.");
});
