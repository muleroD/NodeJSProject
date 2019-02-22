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

    app.get("/Livros", (req, res) => {
        const livroDAO = new LivroDAO(db);

        livroDAO.listar()
            .then(result =>
                res.marko(
                    require("../views/livros/lista/lista.marko"),
                    {
                        result
                    }))
            .catch(error => console.log(error));

    });

};