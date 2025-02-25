const port = process.env.PORT || 3000;

const express = require("express");
const expressHandlebars = require("express-handlebars");
const app = express();
const bodyParser = require('body-parser');
const camps = require('./assets/data/camps');

// configure Handlebars view engine
app.engine("handlebars", expressHandlebars.engine({
    defaultLayout: "main", 
    layoutsDir: 'views/layouts', 
    partialsDir: 'views/partials'
}));
app.set("view engine", "handlebars");

// Home
app.get("/", (req, res) => {
    res.render("Home", { title: 'Jelrjm' });
});

// festival Logan
app.get("/Dranouter", (req, res) => {
    res.render("Camps");
});

// festival Edouard
app.get("/Cactusfestival", (req, res) => {
    res.render("Lessen");
});

// festival Matthias
app.get("/Contact", (req, res) => {
    res.render("Contact", {camps});
});

// festival Jelle
app.get("/Suikerrock", (req, res) => {
    res.render("Verhuur");
});

// festival Jens
app.get("/Pukkelpop", (req, res) => {
    res.render("bedankt");
});

// festival Reinhard
app.get("/Home", (req, res) => {
    res.render("bedankt");
});

// Serve static files from the 'public' directory
app.use(express.static(__dirname + "/public"));


//app.use(express.static(__dirname + "/assests/img"));
// Custom 404 page
app.use((req, res) => {
    res.render("errors/404");
});

// Custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message);
    res.render("errors/500");
});

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`));