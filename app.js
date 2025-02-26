const port = process.env.PORT || 3000;

const express = require("express");
const expressHandlebars = require("express-handlebars");
const app = express();
const bodyParser = require('body-parser');

// configure Handlebars view engine
app.engine("handlebars", expressHandlebars.engine({
    defaultLayout: "main", 
    layoutsDir: 'views/layouts', 
    partialsDir: 'views/partials'
}));
app.set("view engine", "handlebars");

// Home door Reinhard
app.get("/", (req, res) => {
    res.render("Home", { title: 'Jelrjm' });
});

// festival Logan
app.get("/Dranouter", (req, res) => {
    res.render("Dranouter");
});

// festival Edouard
app.get("/Cactusfestival", (req, res) => {
    res.render("Cactusfestival");
});

// festival Matthias
app.get('/contact', (req, res) => {
    res.render('Contact'); // Render de Contact.hbs
});

app.post('/dank-je', (req, res) => {
    res.render('dank-je'); // Render de dank-je.hbs pagina
});

// festival Jelle
app.get("/Suikerrock", (req, res) => {
    res.render("Suikerrock");
});

// festival Jens
app.get("/Pukkelpop", (req, res) => {
    res.render("Pukkelpop");
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