const LivroDAO = require("../class/livroDAO")
const db = require("../../config/database")

module.exports = (app) => {

    app.get("/", (req, res) => {
        res.send(`
        <html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <h1> Casa do Código </h1>
        </body> 
        </html>`
        );
    });

    app.get("/livros", (req, res) => {
        const livroDAO = new LivroDAO(db);

        livroDAO.listar()
            .then(livros =>
                res.marko(
                    require("../views/livros/lista/lista.marko"),
                    { livros }))
            .catch(error => console.log(error));
    });

    app.get("/livros/form", function (req, res) {
        res.marko(require("../views/livros/forms/form.marko"))
    });

    app.post("/livros", function (req, res) {
        const livroDAO = new LivroDAO(db);
        console.log(req.body);

        livroDAO.cadastrar(req.body)
            .then(res.redirect("/livros"))
            .catch(error => console.log(error));
    });

};