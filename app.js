const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const methodOverride = require("method-override");

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost/books_r_us", { useNewUrlParser: true });
mongoose.Promise = global.Promise;

mongoose.connection.on("error", err => console.log(err));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require("./routes/author_routes"));
app.use(require("./routes/blog_routes"));

app.listen(port, () => console.log(`Server is listening on port ${port}`));