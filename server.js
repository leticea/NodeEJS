const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {

    const items = [
        { 
            title: "D",
            message: "Desenvolver aplicações de forma fácil"
        },
        { 
            title: "E",
            message: "EJS usa JavaScript para renderizar HTML"
        },
        { 
            title: "M",
            message: "Muito fácil de usar"
        },
        { 
            title: "A",
            message: "Amorzinho"
        },
        { 
            title: "I",
            message: "Install ejs"
        },
        { 
            title: "S",
            message: "Sintaxe simples"
        }
    ];

    res.render("pages/index", {

        qualitys: items,
    });
})

app.get("/sobre", function (req, res) {

    res.render("pages/about");
})

app.listen(8080);
console.log("Rodando");