const express = require("express");
const app = express();

const port = 5000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Webserver app listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("Main.ejs");
});