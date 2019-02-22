const LivroDAO = require("../class/livroDAO")
const db = require("../../config/database")

module.exports = (app) => {

    app.get("/", (req, res) => {
        res.marko(require("../views/livros/index.marko"))
    });

    app.get("/livros", (req, res) => {
        const livroDAO = new LivroDAO(db);

        livroDAO.select()
            .then(livros =>
                res.marko(
                    require("../views/livros/lista/lista.marko"),
                    { livros }))
            .catch(error => console.log(error));
    });

    app.post("/livros", function (req, res) {
        const livroDAO = new LivroDAO(db);

        livroDAO.insert(req.body)
            .then(res.redirect("/livros"))
            .catch(error => console.log(error));
    });

    app.get("/livros/form", function (req, res) {
        res.marko(require("../views/livros/forms/form.marko"))
    });

    app.get("/livros/buscar", function (req, res) {
        //
    });

    app.post("/livros/form/delete", function (req, res) {
        //
    });

    app.post("/livros/form/update", function (req, res) {
        //
    });

};