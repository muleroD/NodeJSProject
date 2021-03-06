require("marko/node-require").install();
require("marko/express");

const express = require("express");
const app = express();

const bodyParse = require("body-parser");
const methodOverride = require('method-override');


app.use("/static", express.static("src/app/public"));

app.use(bodyParse.urlencoded({
    extended: true,
}))

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method
        delete req.body._method
        return method
    }
}))

const routes = require("../app/routes/routes");
routes(app);

module.exports = app;